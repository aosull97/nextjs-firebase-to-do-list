import React from 'react'
import NewTaskForm from '../components/NewTaskForm'

const NewTaskPage = async () => {
    
  return (
    <div>
        <h1 className='text-center text-2xl font-bold mt-5'>Add New Task</h1>
        <NewTaskForm />
    </div>
  )
}

export default NewTaskPage