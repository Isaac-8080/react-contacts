import React from 'react'

const UserContact = (props) => {
  return (
    <>

    {props.formData.map((user, index) => {
      return (
        <div key={index} className="card bg-slate-500 text-white w-96 shadow">
          <div className="card-body p-3">
            <div className='flex gap-3'>
              <img src={user.image} className='w-14 h-14 object-cover bg-[#F2F2F2] rounded-full' alt="" />
              <div>
                <h2 className="card-title">{user.name}</h2>
                <p>{user.tel}</p>
              </div>
              <button className="btn">Edit</button>
              <button className="btn">Delete</button>
            </div>
          </div>
        </div>
      )
    })}
      
    </>
  )
}

export default UserContact