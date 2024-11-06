'use client'
import { deleteDoc, doc } from '@firebase/firestore'
import React from 'react'
import { db } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';


interface Props {
    taskID: string;
    onDelete: (taskId: string) => void; //Callback function prop
}

const DeleteTaskButton = ({taskID, onDelete}: Props) => {
    const [user] = useAuthState(auth)


    const handleDelete = async () => {
        const itemRef = doc(db, "users", user?.email, "tasks", taskID)
        try {
            await deleteDoc(itemRef)
            alert('Task deleted')
            onDelete(taskID)
        } catch (e) {
            console.error("Error deleting document: ", e);
        }
    }

  return (
    <div>
        <button className='hover:fill-red-600 h-5 w-5' title='Delete Task' onClick={handleDelete}><img src='images/delete.png' alt='Delete'/></button>
    </div>
  )
}

export default DeleteTaskButton