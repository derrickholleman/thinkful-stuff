import React from 'react'
import SubscriberView from './SubscriberView'

const SubscriberList = ({ subscribers }) => {
    console.log(subscribers)
    return (
        <div>
            <h1>Subscribers</h1>
            {
                subscribers.map((subscriber, index) => (
                    <SubscriberView
                    key={index}
                    subscriber={subscriber}/>
                ))
            }
        </div>
    )
}

export default SubscriberList
