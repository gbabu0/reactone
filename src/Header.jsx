import React, { useState } from 'react'



const Header = () => {

  const [name, setName] = useState("")
    function handleChange(){
      const names = ["Apple","Apple2","Apple3"]
      const init = Math.floor(Math.random()*3)
       setName(names[init])
    }

    

    
  return (
    <>
    <div className="container">
    <p> Fruits  {name} </p>
    <button className='btn' onClick={handleChange} >Subscribe</button> <br /><br />

    </div>
    
    </>
    
  )
}

export default Header

