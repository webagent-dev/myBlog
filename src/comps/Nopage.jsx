import React from 'react'
import { useHistory } from 'react-router-dom'

function Nopage() {
    const history = useHistory()
    const homeHandler = () => {
        history.push('/')
    }
    return (
        <div>
            Please Navigate through the Navabar
            <button onClick={homeHandler}>go back home</button>
        </div>
    )
}

export default Nopage
