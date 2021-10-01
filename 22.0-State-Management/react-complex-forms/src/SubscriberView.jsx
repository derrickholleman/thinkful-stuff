import React from 'react'

const SubscriberView = ({ subscriber }) => {
    return (
        <div>
            <p>Name: {subscriber.name}</p>
            <p>Email: {subscriber.email}</p>
            <p>Referral Method: {subscriber.referral}</p>
            <p>Age: {subscriber.age}</p>
        </div>
    )
}

export default SubscriberView
