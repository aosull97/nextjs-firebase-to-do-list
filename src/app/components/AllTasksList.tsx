import { collection, getDocs } from "@firebase/firestore";
import db from "../lib/firebase";

const AllTasksList = async () => {

  interface Task {
    id: string;
    title: string;
    // Add other properties as needed (e.g., completed: boolean)
  }

  const collectionRef = collection(db, "tasks");
  const tasksCollectionSnapshot = await getDocs(collectionRef);
  const tasksList: Task[] = tasksCollectionSnapshot.docs.map((doc) => ({
    id: doc.id,
    title: doc.data().title,
    // Add other properties as needed (e.g., completed: doc.data().completed)
  }));

  console.log(tasksList);

  return (
    <div>
      <ul className="text-left w-1/4 border m-auto mt-10">
        {tasksList.map((task) => (
          <li key={task.id} className="p-2 border">{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllTasksList;
