import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase/config";
import { doc, getDoc } from "@firebase/firestore";
import { useState } from "react";



const EditTaskForm = ({ taskId }: { taskId: string }) => {
  const [user] = useAuthState(auth);
  const [taskTitle, setTaskTitle] = useState("")

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


  return (
    <div>
      <h1 className="text-gray-50 text-center text-2xl mt-10">Edit Task</h1>
      <div>
        <form className="m-auto w-1/2 p-5 mt-10 rounded bg-gray-800 shadow-xl sm:w-1/4">
          <div>
            <label className="mb-2 block text-gray-50">Task Name:</label>
            <input
                defaultValue={taskTitle}
              type="text"
              className="w-full p-1 mb-4 bg-gray-700 rounded outline-none text-gray-100 placeholder-gray-500"
            ></input>
          </div>
          <button
            type="submit"
            className="bg-orange-700 rounded text-gray-50 hover:bg-orange-600 p-2 mt-4"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditTaskForm