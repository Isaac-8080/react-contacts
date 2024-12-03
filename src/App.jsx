import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'

function App() {
  
  return (
    <>
      <div className='flex flex-col items-center mt-5'>
        <ContactForm />
      </div>
    </>
  )
}

export default App
