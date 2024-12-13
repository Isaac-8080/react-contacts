import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';

const ContactForm = ({handleFormData}) => {

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
    const contactDetails = {image,name, tel, id: uuid()}

    // submit if inputs are not empty
    if (name && tel ) {
      handleFormData(contactDetails);
    }

    setName("");
    setTel("");
    setImage("");
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        
        <h1 className='font-bold text-3xl'>Contact Form</h1>
        
        <div className='flex flex-col gap-3 mt-3 w-96'>
          
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" value={name} onChange={handleName} placeholder="Name" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <input type="tel" className="grow" value={tel} onChange={handleTel} placeholder="Tel" />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" value={image} onChange={handleImage} placeholder="Image link" />
          </label>

          <button className="btn w-full">Add Contact</button>

        </div>

      </form>
    </>
  )
}

export default ContactForm
