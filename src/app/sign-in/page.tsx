'use client'
import { useState } from 'react';
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useRouter } from 'next/navigation';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  //Return an array where the first value of the array is the SignInWithEmailAndPassword function
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log(res);
      setEmail('');
      setPassword('');
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-gray-50 text-center text-2xl mb-8">Sign In</h1>
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
          onClick={handleSignIn}
          className="w-full p-3 bg-orange-700 rounded text-gray-50 hover:bg-orange-600"
        >
          Login
        </button>
        <p className='text-center mt-4 text-xs text-gray-400'>Don't have an account? <a className='underline underline-offset-2 text-gray-300' href="/sign-up">Sign Up</a></p>
      </div>
      
    </div>
  );
};

export default SignIn;