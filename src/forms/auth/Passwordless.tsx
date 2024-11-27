'use client';

import { useState } from 'react';
import { auth } from '@/lib/firebase';
import { sendSignInLinkToEmail, signInWithEmailLink } from 'firebase/auth';

export default function PasswordlessForm() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSendLink = async () => {
    try {
      const actionCodeSettings = { url: 'http://localhost:3000', handleCodeInApp: true };
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      localStorage.setItem('emailForSignIn', email);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleSignIn = async () => {
    const emailForSignIn = localStorage.getItem('emailForSignIn');
    if (emailForSignIn) {
      try {
        await signInWithEmailLink(auth, emailForSignIn, window.location.href);
        localStorage.removeItem('emailForSignIn');
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={handleSendLink}>Send Sign-In Link</button>
      {success && <p>Check your email for the sign-in link!</p>}
      <button onClick={handleSignIn}>Sign In with Link</button>
      {error && <p>{error}</p>}
    </div>
  );
}
