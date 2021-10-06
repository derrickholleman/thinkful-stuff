import React from 'react'
import { useParams } from 'react-router'

const User = () => {

    // here you would use useEffect to fetch this specific users data from the database and render to page

    const { username } = useParams()
    return (
        <div>
            <h1>Welcome to {username}'s page!</h1>
        </div>
    )
}

export default User
