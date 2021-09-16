import { useState, useEffect } from 'react'
import style from '../style/auth.module.css'
import data from '../features/data'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { setNewsData } from '../features/dataSlice'
import { auth } from '../firebase'
import { setUser, selectUser, removeUser } from '../features/authSlice'



function Auth() {
    // const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const History = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then((userData) => dispatch(setUser({
            email: userData.user.email,
            uid: userData.user.uid,
        }))).catch((err) => alert(err.message))
         History.push('/news')
        setEmail('')
        setPassword('') 
    }
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log(user)
            if(user){
                // we login
               dispatch(setUser({
                   email: user.email,
                   uid: user.uid,
                   displayName: user.displayName,
                   photoUrl: user.photoURL
               }))
               History.push('/news')
               return
            }  // we logout
                dispatch(removeUser())
                    History.push('/')
        })
        
    },[])
    
    return (
        <div className={style.container}>
                <section className={style.wrapper}>
                    <div className={style.mainIcon}></div>
                    <h2> welcome MianiaBlog</h2>
                    <h3>Get your Updata from the well cook news app of the age
                        updated in a sec around the globel
                    </h3>
                   <form className={style.formWrapper} onSubmit={handleSubmit}>
                       <label>Your Email</label>
                       <input placeholder='enter your email' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                       <label>Your Password</label>
                       <input placeholder='enter your password' required  value={password} onChange={(e) => setPassword(e.target.value)}/>
                       <button type='submit'> Login</button>
                   </form>
                   <p className={style.register}>Not A Member >> <Link to='/sign_up' className={style.color}>register now</Link></p>
                </section>
        </div>
    )
}

export default Auth
