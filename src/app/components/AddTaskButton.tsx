import React from 'react'
import Link from 'next/link'

const AddTaskButton = () => {
  return (
    <div className='text-center mt-6'>
        <Link href="/newTask">
        <button className='bg-orange-700 rounded text-gray-50 hover:bg-orange-600 p-2'>Add Task</button>
        </Link>
    </div>
  )
}

export default AddTaskButton