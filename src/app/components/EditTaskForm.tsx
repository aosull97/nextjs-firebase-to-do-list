import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/config";
import { doc, getDoc, setDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import Link from "next/link";


const EditTaskForm = ({ taskId }: { taskId: string }) => {
  const [user] = useAuthState(auth);
  const [taskTitle, setTaskTitle] = useState("")

  useEffect(() => {
    const fetchTaskData = async () => { 
        const itemRef = doc(db, `users/${user?.email}/tasks/${taskId}`)
        const taskDoc = await getDoc(itemRef)
          if(!taskDoc.exists) {
              console.log('No such document')
          } else {
              const data = taskDoc.data()
              if(data){
              console.log(data)
              setTaskTitle(data.title)
              }
          }
        }
        fetchTaskData()
  

  }, [taskId])


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(user?.email) { //Check if user.email is defined
    try {
        const taskDocRef = doc(db, `users/${user.email}/tasks/${taskId}`);
        const docRef = await setDoc(taskDocRef, {
            title: taskTitle
        });
        console.log(`Document with ID ${taskId} updated successfully}`);
        alert('Task updated!')
        setTaskTitle(taskTitle); //Set the form title to current one
    } catch (e) {
        console.error("Error updating document: ", e);
    }
}   else {
  console.log("User email is undefined. Cannot add task")
}
};


  return (
    <div>
      <h1 className="text-gray-50 text-center text-2xl mt-10">Edit Task</h1>
      <div>
        <form onSubmit={handleSubmit} className="m-auto w-1/2 p-5 mt-10 rounded bg-gray-800 shadow-xl sm:w-1/4">
          <div>
            <label className="mb-2 block text-gray-50">Task Name:</label>
            <input
            value={taskTitle} 
            onChange={e => setTaskTitle(e.target.value)}
              type="text"
              className="w-full p-1 mb-4 bg-gray-700 rounded outline-none text-gray-100 placeholder-gray-500"
            ></input>
          </div>
          <button
            type="submit"
            className="bg-orange-700 rounded text-gray-50 hover:bg-orange-600 p-2 mt-4"
          >
            Update Task
          </button>
        </form>
      </div>
      <div className="text-center mt-10">
        <Link href="/">
        <button className='border rounded p-2 hover:bg-gray-800'>Back to List</button>
        </Link>
      </div>
    </div>
  );
}

export default EditTaskForm