import React, { useState } from 'react'
import AddTaskButton from './components/AddTaskButton'
import AllTasksList from './components/AllTasksList'

const ToDoList = () => {


  return (
    <>
      <div>
      <h1 className='text-center text-3xl font-bold underline mt-5'>My To Do List</h1>
      </div>
      <div>
        <AllTasksList />
      </div>
      <div>
        <AddTaskButton />
      </div>
    </>
  )
}

export default ToDoList
