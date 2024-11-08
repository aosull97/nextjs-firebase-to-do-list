'use client';
import { collection, getDocs } from "@firebase/firestore";
import {db} from "../firebase/config";
import DeleteTaskButton from "./DeleteTaskButton";
import EditTaskButton from "./EditTaskButton";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

interface Task {
  id: string;
  title: string;
}

const AllTasksList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [user] = useAuthState(auth);


  useEffect(() => {
    const fetchTasks = async () => {
      if (user) {
        if (user.email) {
        try {
          const collectionRef = collection(db, `users/${user.email}/tasks`);
          const tasksCollectionSnapshot = await getDocs(collectionRef);
          const tasksList: Task[] = tasksCollectionSnapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
          }));

          setTasks(tasksList);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      } else {
        console.log("User email not defined.")
      }
    }
  }

    fetchTasks(); // Call the async function inside useEffect
  }, [user]); //Add user as a dependency to ensure that the tasks are re-fetched whenever the user logs in or out

  const handleTaskDeleted = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <ul className="text-left w-1/4 border border-gray-600 m-auto mt-10">
        {tasks.map((task) => (
          <li key={task.id} className="p-2 border border-gray-600 flex justify-between align-center bg-gray-800">
            {task.title}
            <div className="flex space-x-2 justify-center">
              <EditTaskButton taskId= {task.id} taskTitle={task.title}/>
              <DeleteTaskButton taskId={task.id} onDelete={handleTaskDeleted} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTasksList;
