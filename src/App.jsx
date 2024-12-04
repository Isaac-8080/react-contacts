import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'
import UserContact from './components/UserContact';

function App() {

  const [formData, setFormData] = useState([]);

  const handleFormData = (data) => {
    setFormData([...formData, data])
  }  

  return (
    <>
      <div className='flex flex-col items-center mt-5'>
        <ContactForm handleFormData={handleFormData} />
        <div className='flex flex-col gap-3 mt-5'>
          <UserContact formData={formData} />
        </div>
      </div>
    </>
  )
}

export default App
