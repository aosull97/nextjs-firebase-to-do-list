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
      <form onSubmit={handleSubmit} className="m-auto w-1/2 p-5 mt-10 border rounded bg-gray-500 sm:w-1/4">
        <div>
          <label className="mb-2 block">Title</label>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} className="text-gray-900 w-full"></input>
        </div>
        <button type="submit" className="p-2 border rounded hover:bg-slate-500 font-semibold mt-8">Add Task</button>
      </form>
      </div>

      <div className="text-center mt-10">
        <Link href="/">
        <button className='border rounded p-2 hover:bg-slate-500'>Back to List</button>
        </Link>
      </div>
    </div>
  );
};

export default NewTaskForm;
