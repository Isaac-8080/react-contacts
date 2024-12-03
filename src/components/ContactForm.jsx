import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

const ContactForm = () => {

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [image, setImage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }
  
  const handleTel = (e) => {
    setTel(e.target.value);
  }
  
  const handleImage = (e) => {
    setImage(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // current states
    const contactDetails = {name, tel, image, id: uuid()}

    // if input are not empty
    if (name && tel && image) {
      console.log(contactDetails);
    }
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="card gap-3 w-96 shadow p-5">
          <h1 className='font-bold'>Contact Form</h1>
          <div className='flex flex-col md:flex-row gap-3'>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" value={name} onChange={handleName} placeholder="Name" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input type="tel" className="grow" value={tel} onChange={handleTel} placeholder="Tel" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" value={image} onChange={handleImage} placeholder="Image link" />
              {/* <input type="file" name="" id="" /> */}
            </label>
            <button className="btn btn-wide">Add Contact</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactForm
