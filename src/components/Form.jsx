import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [formData, setFormdata] = useState({
    name : "",
    age : "",
    caption :"",
    imgurl : "",
  })
  const inputHandler = (event) => {
    event.preventDefault();
    let key = event.target.name
    let value = event.target.value
    setFormdata({...formData, [key]: value})
console.log(formData);
  }
  return (
    <div>
      <input type="text" name='name' value={formData.name} onChange={inputHandler} placeholder='Enter name' />
      <input type="number" name ="age" value={formData.age} onChange={inputHandler} placeholder='Enter age' />
      <input type="text" name='caption' value={formData.caption} onChange={inputHandler} placeholder='Enter caption' />
      <input type="text" name='imgurl' value={formData.imgurl} onChange={inputHandler} placeholder='Enter imgurl' />

    </div>
  )
}

export default Form

