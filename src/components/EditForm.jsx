import React, { useState } from "react";

const EditForm = ({user, handleEdit}) => {
  
  const [name, setName] = useState(user.name);
  const [tel, setTel] = useState(user.tel);
  const [image, setImage] = useState(user.image);

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () =>{
    setIsModalOpen(true)
  }
  
  const closeModal = () =>{
    setIsModalOpen(false)
  }

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
    const editFormDetails = {image, name, tel, id: user.id}
    
    handleEdit(user.id, editFormDetails);
    
    closeModal();

  }

  return (
    <div>
      <button className="bg-green-600 px-2 border-none rounded-lg py-1 h-fit" onClick={openModal} >Edit</button>
      
      {isModalOpen && (
        <dialog open id="my_modal_2" className="modal bg-white opacity-50">
          <div className="modal-box w-fit">
            <form onSubmit={handleSubmit}>
              <h1 className='font-bold text-3xl text-black'>Update Contact</h1>
              <div className='flex flex-col gap-3 mt-3 w-96'>
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow text-black" value={name} onChange={handleName} placeholder="Name" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input type="tel" className="grow text-black" value={tel} onChange={handleTel} placeholder="Tel" />
                </label>
                <label className="input input-bordered flex items-center gap-2">
                  <input type="text" className="grow text-black" value={image} onChange={handleImage} placeholder="Image link" />
                </label>
                <div className="flex flex-row gap-3 items-center">
                  <button onClick={closeModal} className="btn ">Cancel</button>
                  <button className="btn bg-green-500">Save Changes</button>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      )}

    </div>
  );
}

export default EditForm;