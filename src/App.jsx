import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'

function App() {

  const [formData, setFormData] = ([]);

  const handleFormData = (data) => {
    setFormData([...formData, data])
  }

  return (
    <>
      <div className='flex flex-col items-center mt-5'>
        <ContactForm handleFormData={handleFormData} />
      </div>
    </>
  )
}

export default App
