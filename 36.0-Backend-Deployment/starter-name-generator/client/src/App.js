import React, { useState, useEffect } from 'react'

const App = () => {
  const [name, setName] = useState([])

  useEffect(() => {
    fetch('https://enigmatic-shore-92552.herokuapp.com/generate')
      .then((res) => res.json())
      .then((nme) => setName([nme]))
  }, [])

  return (
    <h1>{name}</h1>
  )
}

export default App
