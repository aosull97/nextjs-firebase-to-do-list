import React, { useState } from 'react'
import Link from 'next/link';

interface Props {
    taskTitle: string;
    taskId: string;
}

const EditTaskButton = ({taskId, taskTitle} : Props) => {


  return (
    <div>
        <Link href={`/editTask/${taskId}`}>
            <button><img className='h-5 w-5' src='/images/edit.png' alt='Edit' title='Edit Task' /></button>
        </Link>
    </div>
  )
}

export default EditTaskButton