'use client'; // AllTasksList is now a Client Component
import { collection, getDocs } from "@firebase/firestore";
import {db} from "../firebase/config";
import DeleteTaskButton from "./DeleteTaskButton";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

interface Task {
  id: string;
  title: string;
  // Add other properties as needed (e.g., completed: boolean)
}

const AllTasksList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [user] = useAuthState(auth);


  useEffect(() => {
    const fetchTasks = async () => {
      if (user) {
        try {
          const collectionRef = collection(db, "users", user?.email, "tasks");
          const tasksCollectionSnapshot = await getDocs(collectionRef);
          const tasksList: Task[] = tasksCollectionSnapshot.docs.map((doc) => ({
            id: doc.id,
            title: doc.data().title,
            // Add other properties as needed (e.g., completed: doc.data().completed)
          }));
          setTasks(tasksList);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        }
      }
    };

    fetchTasks(); // Call the async function inside useEffect
  }, [user]); //Add user as a dependency to ensure that the tasks are re-fetched whenever the user logs in or out

  const handleTaskDeleted = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <ul className="text-left w-1/4 border m-auto mt-10">
        {tasks.map((task) => (
          <li key={task.id} className="p-2 border flex justify-between">
            {task.title}
            <DeleteTaskButton taskID={task.id} onDelete={handleTaskDeleted} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTasksList;
