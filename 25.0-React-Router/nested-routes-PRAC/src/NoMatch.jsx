import React from 'react'
import { Link } from 'react-router-dom'

const NoMatch = () => {
    return (
        <div>
            <code>404 Page Not Found!</code>
            <Link to='/' style={{display: "block"}}>Return Home</Link>
        </div>
    )
}

export default NoMatch
