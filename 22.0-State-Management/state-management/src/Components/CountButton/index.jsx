import React, {useState} from 'react'

const CountButton = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount((count) => count + 1)
    }

    return (
        <div style={{"paddingTop":"2rem"}}>
            <button onClick={handleIncrement}>Click Count: {count}</button>
        </div>
    )
}

export default CountButton
