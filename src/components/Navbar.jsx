import React from 'react'

const Navbar = (props) => {
    let age = 22
  return (
    <div>
        <div className='navbar'>
            <h1>{props.userName} - {age} Y'o, soon will be {props.age2} </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, ipsum. Repellat dicta nisi sunt assumenda debitis atque distinctio, reprehenderit neque natus modi est tenetur, nemo nulla voluptatibus animi qui quibusdam?</p>
        </div>
    </div>
  )
}

export default Navbar