'use client'
import { deleteDoc, doc } from '@firebase/firestore'
import React from 'react'
import db from '../lib/firebase'

interface Props {
    taskID: string;
    onDelete: (taskId: string) => void; //Callback function prop
}

const DeleteTaskButton = ({taskID, onDelete}: Props) => {

    const handleDelete = async () => {
        const itemRef = doc(db, "tasks", taskID)
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
        <button onClick={handleDelete}>X</button>
    </div>
  )
}

export default DeleteTaskButton