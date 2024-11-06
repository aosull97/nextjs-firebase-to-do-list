import React from 'react'
import NewTaskForm from '../components/NewTaskForm'

const NewTaskPage = async () => {
    
  return (
    <div>
        <h1 className='text-gray-50 text-center text-2xl mt-10'>Add New Task</h1>
        <NewTaskForm />
    </div>
  )
}

export default NewTaskPage