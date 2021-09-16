import React, { useState, useEffect } from 'react'
import style from '../style/navbar.module.css'
import { FaSearch } from 'react-icons/fa'
import { useSelector, useDispatch  } from 'react-redux'
// import { } from '../features/userSlice'
import { selectUser, removeUser, setUser } from '../features/authSlice'
import { useHistory } from 'react-router-dom'
import { setInput } from '../features/dataSlice'
import { auth } from '../firebase'
import Avatar from 'react-avatar'


function Navbar() {
    const [text, setText ] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const handleLogout = () => {
        auth.signOut().then(() =>  {
            dispatch(removeUser())
            history.push('/')
        })
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
    const handleSubmit = e => {
        e.preventDefault()
        if(text){
            dispatch(setInput(text))
        }
    }
    return (
        <div className={style.container}>
            <section className={style.navWrapper}>
                <header>MiniaBlog</header>
                {!user ? <p className={style.welcomeText}> welcome to miniaBlog</p>
                 :
                 <>
                <div className={style.navInput}> 
                    < FaSearch />
                    <form className={style.navform} onSubmit={handleSubmit}>
                    <input type='search' placeholder='Search' autoFucus value={text} onChange={(e) => setText(e.target.value)}/>
                    </form>
                </div>
                <div className={style.userData}>
                <img  src={user.photoURL && <Avatar size='50px' src={user.displayName}/>} alt='placehoder' className={style.userPhoto}/>
                    <p>{user.displayName}</p>
                    <button className='btnLogin' onClick={handleLogout}>logOut</button>
                </div>
                </>
            }
            </section>
        </div>
    )
}

export default Navbar
