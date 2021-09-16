import { useState, useEffect } from 'react'
import style from '../style/form.module.css'
import { Link } from 'react-router-dom'
import { auth }  from '../firebase'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setUser, removeUser } from '../features/authSlice'

function Form() {
    const [name, setName]  = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()
    
    // handle Submit
    
    const handleSubmit = e => {
      e.preventDefault()
    //   auth.signInWithEmailAndPassword(email, password)
    //   .then((userData) => dispatch(setUser({
    //       email: userData.user.email,
    //       uid: userData.user.uid,
    //       photoURL: photoUrl,
    //       displayName: name
    //   })))

    }

    // Create user
    const createUser = () => {
        auth.createUserWithEmailAndPassword(email, password)
       .then((userData) => {
           userData.user.updateProfile({
                displayName: name,
                photoURL: photoUrl
           }).then(() => dispatch(setUser({
               email: userData.user.email,
               uid: userData.user.uid,
               displayName: name,
               photoURL: photoUrl
           })))
       }).catch((err) => alert(err.message))
    }
    
   
    return (
        <div className={style.container}>
            <form className={style.formWrapper} onSubmit={handleSubmit}>
            <h2>Become A Member</h2>
                    <label>Full_Name</label>
                    <input type='text' placeholder='Full_Name' value={name} onChange={(e) => setName(e.target.value)} required/>
                     <label>Email</label>
                    <input type='Email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label>Photo_Url </label>
                    <input type='text' placeholder='Photo_Link' value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)}  />
                    <label>PassWord</label>
                    <input type='password' placeholder='Must Be Six Digit/Num' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type='submit' className={style.regisBtn} onClick={createUser}> Register </button>
                    <p>Thanks from Signing Up with Us <Link to='/'>already a user Login</Link></p>
            </form>
        </div>
    )
}

export default Form
