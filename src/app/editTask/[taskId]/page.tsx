'use client'
import EditTaskForm from '@/app/components/EditTaskForm';
import { useParams } from 'next/navigation';


const editTask = () => {
  const params = useParams() as {taskId: string}
  const taskId = params.taskId;
  console.log(taskId);

  if(!taskId) {
    return <div>Task not found</div>
  }

  return (
    <div>
        <EditTaskForm taskId={taskId}/>
    </div>
  )
}

export default editTask
