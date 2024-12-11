import EditForm from './EditForm';

const UserContact = ({formData, handleEdit, handleDelete }) => {
  
  return (
    <>
      {formData.map((user) => {
        
        return (
          <div key={user.id} className="card bg-slate-500 mt-3 text-white w-96 shadow">
            <div className="card-body p-3">
              <div className='flex items-center justify-between gap-3'>
                <div className='flex gap-3'>
                  <img src={user.image} className='w-14 h-14 object-cover bg-[#F2F2F2] rounded-full' alt="" />
                  <div>
                    <h2 className="card-title">{user.name}</h2>
                    <p>{user.tel}</p>
                  </div>
                </div>
                <div className='flex gap-2'>
                  <EditForm user={user} handleEdit={handleEdit} />
                  <button onClick={() => handleDelete(user.id)} className="bg-red-600 px-2 border-none rounded-lg py-1 h-fit">Delete</button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
    
  );
}

export default UserContact;