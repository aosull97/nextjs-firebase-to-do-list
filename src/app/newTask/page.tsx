'use client'
import React from 'react'
import NewTaskForm from '../components/NewTaskForm'
import RedirectToLogin from '../redirect'
import { useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../firebase/config'


const NewTaskPage = () => {
  const [user] = useAuthState(auth)

  // Trigger the redirect before rendering anything to the client
  // This prevents this page from flashing if a user tries to access it without being logged in
  const ServerSideRedirect = () => {
    if (!user) {
      RedirectToLogin();
    }
    return null;
  }
    
  return (
    <div>
      <ServerSideRedirect />
        <h1 className='text-gray-50 text-center text-2xl mt-10'>Add New Task</h1>
        <NewTaskForm />
    </div>
  )
}

export default NewTaskPage