import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Navbar userName = "Anson" age2 = {23} />
      <Card />
    </>
  )
}

export default App