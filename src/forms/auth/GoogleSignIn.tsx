'use client';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import styles from './auth.module.css';
import { FcGoogle } from "react-icons/fc";
import {useEffect, useState} from 'react'

export default function GoogleSignInButton({type}: {type: string}) {
  const [text, setText] = useState('Sign in with Google');

  useEffect(() => {
    const textMap = {
      signup: 'Sign up with Google',
      login: 'Login with Google'
    }

    setText(textMap[type]);
  }, [type])

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      console.error('Google Sign-In Error:', err.message);
      alert('An error occurred during Google Sign-In. Please try again.');
    }
  };

  return (
    <button onClick={handleGoogleSignIn} className={styles.googleButton}>
      <FcGoogle size={25}/>
      {text}
    </button>
  );
}
