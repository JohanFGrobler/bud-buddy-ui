'use client';

import { useState, FormEvent } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { validateField } from '@/utils/validation';
import Input from '@/components/inputs/input/Input';
import styles from './auth.module.css';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({ email: '', password: '' });
  const [touched, setTouched] = useState({ email: false, password: false });

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setValidationErrors({
        email: validateField('email', email),
        password: validateField('password', password),
      });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleBlur = (field: string, value: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setValidationErrors((prev) => ({
      ...prev,
      [field]: validateField(field, value),
    }));
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSignup} className={styles.form}>
        <h1 className={styles.title}>Create an Account</h1>
        <h2 className={styles.subtitle}>Sign up to track your grow, manage your plants, and watch your harvest flourish.</h2>
        <Input
          type="email"
          value={email}
          onChange={setEmail}
          onBlur={() => handleBlur('email', email)}
          placeholder="Email"
          error={touched.email ? validationErrors.email : ''}
        />
        <Input
          type="password"
          value={password}
          onChange={setPassword}
          onBlur={() => handleBlur('password', password)}
          placeholder="Password"
          error={touched.password ? validationErrors.password : ''}
        />
        <button type="submit" className={styles.button}>
          Sign Up
        </button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
    </div>
  );
}