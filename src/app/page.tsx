'use client';

import { useAuth } from '@/hooks/useAuth';
import LoginForm from '@/forms/auth/Login';
import SignupForm from '@/forms/auth/Signup';
import PasswordlessForm from '@/forms/auth/Passwordless';
import GoogleSignInButton from '@/forms/auth/GoogleSignIn';

export default function AuthPage() {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  if (user) {
    return (
      <div>
        <h1>Welcome, {user.email}</h1>
        <p>You are logged in.</p>
      </div>
    );
  }

  return (
    <div>
      <LoginForm />
      <SignupForm />
      <PasswordlessForm />
      <GoogleSignInButton />
    </div>
  );
}
