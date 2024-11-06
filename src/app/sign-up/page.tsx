'use client'
import {useState} from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/config'
import { useRouter } from 'next/navigation'

const signUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password)
      console.log(res)
      setEmail('')
      setPassword('')
      router.push('/sign-in')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
      <h1 className="text-gray-50 text-2xl mb-8 text-center">Sign Up</h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-gray-100 placeholder-gray-500"
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-gray-100 placeholder-gray-500"
      />
      <button 
        onClick={handleSignUp}
        className="w-full p-3 bg-orange-700 rounded text-gray-50 hover:bg-orange-600"
      >
        Sign Up
      </button>
      <p className='text-center mt-4 text-xs text-gray-400'>Already have an account? <a className='underline underline-offset-2 text-gray-300' href="/sign-in">Sign In</a></p>
    </div>
  </div>
  )
}

export default signUpPage