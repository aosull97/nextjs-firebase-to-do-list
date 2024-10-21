'use client';
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../lib/firebase";

const NewTaskForm = () => {
    
    const [value, setValue] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'tasks'), {
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
      <form onSubmit={handleSubmit} className="m-auto w-1/4 p-5 mt-10 border rounded bg-gray-500 w-1/2 sm:w-1/4">
        <div>
          <label className="mb-2 block">Title</label>
          <input type="text" value={value} onChange={e => setValue(e.target.value)} className="text-gray-900 w-full"></input>
        </div>
        <button type="submit" className="p-2 border rounded hover:bg-slate-500 font-semibold mt-8">Add Task</button>
      </form>
    </div>
  );
};

export default NewTaskForm;
