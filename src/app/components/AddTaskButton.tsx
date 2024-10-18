import React from 'react'
import Link from 'next/link'

const AddTaskButton = () => {
  return (
    <div className='text-center mt-6'>
        <Link href="/newTask">
        <button className='border rounded p-2 hover:bg-slate-500'>Add Task</button>
        </Link>
    </div>
  )
}

export default AddTaskButton