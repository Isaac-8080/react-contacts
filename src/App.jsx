import { useState } from 'react'
import './App.css'
import ContactForm from './components/ContactForm'
import UserContact from './components/UserContact';

function App() {

  const [formData, setFormData] = useState([]);
  console.log(formData);

  const handleFormData = (data) => {
    setFormData([...formData, data])
  }

  const handleDelete = (id) => {
    setFormData(formData.filter((user) => user.id !== id))
  }

  const handleEdit = (id, newDetails) => {

    setFormData(
      formData.map(user => user.id === id ? newDetails : user)
    )
  }

  return (
    <>
      <div className='flex flex-col items-center mt-5'>
        <ContactForm handleFormData={handleFormData} />
        <div className='flex flex-col'>
          <UserContact formData={formData} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
      </div>
    </>
  )
}

export default App
