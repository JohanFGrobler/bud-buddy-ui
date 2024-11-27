'use client';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import styles from './auth.module.css';
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignInButton() {
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (err: any) {
      console.error('Google Sign-In Error:', err.message);
    }
  };

  return (
    <button onClick={handleGoogleSignIn} className={styles.googleButton}>
      <FcGoogle size={25}/>
      Sign in with Google
    </button>
  );
}
