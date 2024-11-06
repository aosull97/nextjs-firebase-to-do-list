'use client';
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase/config";
import Link from "next/link";
import { useAuthState} from 'react-firebase-hooks/auth'
import { auth } from "../firebase/config";

const NewTaskForm = () => {
    
    const [value, setValue] = useState("");
    const [user] = useAuthState(auth)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'users', user?.email, 'tasks'), {
                title: value
            });
            console.log("Document written with ID: ", docRef.id);
            alert('Task added!')
            setValue(''); // Clear the form
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }   

  return (
    <div>
    <div>
      <form onSubmit={handleSubmit} className="m-auto w-1/2 p-5 mt-10 rounded bg-gray-800 shadow-xl sm:w-1/4">
        <div>
          <label className="mb-2 block text-gray-50">Task Name:</label>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} className="w-full p-1 mb-4 bg-gray-700 rounded outline-none text-gray-100 placeholder-gray-500"></input>
        </div>
        <button type="submit" className="bg-orange-700 rounded text-gray-50 hover:bg-orange-600 p-2 mt-4">Add Task</button>
      </form>
      </div>

      <div className="text-center mt-10">
        <Link href="/">
        <button className='border rounded p-2 hover:bg-gray-800'>Back to List</button>
        </Link>
      </div>
    </div>
  );
};

export default NewTaskForm;
