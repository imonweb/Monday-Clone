import React from 'react'

const DeleteBlock = () => {
  const deleteTicket = () => {
    console.log('deleteTicket')
  }
  return (
    <div className='delete-block'>
      <div 
        className="delete-icon"
        onClick={deleteTicket}  
      >
        ⨂ 
      </div>
    </div>
  )
}

export default DeleteBlock