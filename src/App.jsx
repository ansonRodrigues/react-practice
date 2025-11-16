import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import topShoes from './data/topshoes'

const App = () => {

  return (
    <>
      <Navbar userName="Anson" age2={23} />
      <div className='product-card-container'> {topShoes.map((elem)=>{
        return <Card productImage = {elem.productImage} brandLogo = {elem.brandLogo} prodTitle = {elem.title} 
        prodDesc = {elem.description} price = {"$ " + elem.price}/>

      })}</div>
    </>
  )
}

export default App