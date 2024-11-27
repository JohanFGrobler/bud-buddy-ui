'use client'

import {useAuth} from '@/hooks/useAuth'
import LoginForm from '@/forms/auth/Login'
import SignupForm from '@/forms/auth/Signup'
import Image from 'next/image'
import styles from './home.module.css'
import {useEffect, useState} from 'react'

import {signOut} from 'firebase/auth'
import {auth} from '@/lib/firebase'

export default function AuthPage() {
  // Hooks
  const {user, loading} = useAuth()

  // State
  const [activeForm, setActiveForm] = useState('login')
  const [content, setContent] = useState(<LoginForm onRegister={() => setActiveForm('register')}/>)

  // Effects
  useEffect(() => {
    const formMap = {
      login: <LoginForm onRegister={() => setActiveForm('signup')}/>,
      signup: <SignupForm onLogin={() => setActiveForm('login')}/>
    }

    setContent(formMap[activeForm])
  }, [activeForm])


  if (loading) return <p>Loading...</p>

  if (user) {
    return (
      <div>
        <h1>Welcome, {user.email}</h1>
        <p>You are logged in.</p>
        <button onClick={() => signOut(auth)}>Sign out</button>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.backgroundImageWrapper}>
        <Image
          className={styles.backgroundImage}
          src="/background.jpg"
          alt="Cannibis background"
          fill={true}
          style={{
            filter: 'contrast(1.2) saturate(1.5)'
          }}
        />
        {/* Dark Overlay */}
        <div className={styles.backgroundImageOverlay}/>

        {/*FORM*/}
        {content}
      </div>
    </div>
  )
}
