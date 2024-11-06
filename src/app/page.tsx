'use client'
import AddTaskButton from './components/AddTaskButton'
import AllTasksList from './components/AllTasksList'
import { useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase/config'
import { useRouter } from 'next/navigation'
import { signOut } from 'firebase/auth'

const ToDoList = () => {

  const [user] = useAuthState(auth)
  const router = useRouter()

  if (!user) {
    return router.push('/sign-in') //Adding return here stops the home page from flashing for a few seconds when the user is redirected
  }

  return (
    <>
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
