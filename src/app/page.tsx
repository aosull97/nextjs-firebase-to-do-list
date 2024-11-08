'use client'
import AddTaskButton from './components/AddTaskButton'
import AllTasksList from './components/AllTasksList'
import { useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase/config'
import { signOut } from 'firebase/auth'

import RedirectToLogin from './redirect'

const ToDoList = () => {
  const [user] = useAuthState(auth)

  // Trigger the redirect before rendering anything to the client
  // This prevents the homepage from flashing if a user tries to access it without being logged in

  const ServerSideRedirect = () => {
    if (!user) {
      RedirectToLogin();
    }
    return null;
  }


  return (
    <>
    <ServerSideRedirect /> {/*Call the ServerSideRedirect to check if the user is logged in before rendering anything to the client*/}
      <div className='mt-4 mr-4 text-right'>
        <button className='border rounded p-2 hover:bg-gray-800'

         onClick={() => {
          signOut(auth)
        }}
          >Logout</button>
      </div>
      <div>
      <h1 className='text-center text-3xl font-bold underline mt-5'>My To Do List</h1>
      </div>
      <div>
        <AllTasksList />
      </div>
      <div>
        <AddTaskButton />
      </div>
    </>
  )
}

export default ToDoList
