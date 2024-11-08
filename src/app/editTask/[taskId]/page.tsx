'use client'
import EditTaskForm from '@/app/components/EditTaskForm';
import { useParams } from 'next/navigation';
import RedirectToLogin from '@/app/redirect';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';

const editTask = () => {
  const [user] = useAuthState(auth)
  const params = useParams() as {taskId: string}
  const taskId = params.taskId;


  const ServerSideRedirect = () => {
    if (!user) {
      RedirectToLogin();
    }
    return null;
  }

  if(!taskId) {
    return <div>Task not found</div>
  }

  return (
    <div>
        <ServerSideRedirect />
        <EditTaskForm taskId={taskId}/>
    </div>
  )
}

export default editTask
