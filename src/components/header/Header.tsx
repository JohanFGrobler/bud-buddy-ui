'use client'

import {ReactNode, useEffect, useState} from 'react'
import {usePathname} from 'next/navigation'
import styles from './header.module.css'
import {IoIosMore} from 'react-icons/io'
import {MdArrowBackIos} from 'react-icons/md'
import {IoSearch} from 'react-icons/io5'

type Icon = {
  visible: boolean,
  icon: ReactNode,
}

export default function Header() {
  const path = usePathname()

  const [actionIcon, setActionIcon] = useState<Icon>({visible: false, icon: null})
  const [backIcon, setBackIcon] = useState<Icon>({visible: false, icon: <MdArrowBackIos/>})
  const [title, setTitle] = useState<string>()

  useEffect(() => {
    const actionIconMap = {
      menu: <IoIosMore/>
    }

    setBackIcon({...backIcon, visible: true})
    setActionIcon({...actionIcon, visible: true, icon: actionIconMap.menu})
  }, [])

  useEffect(() => {
    const titleMap: Record<string, string> = {
      '/grows': 'My grows',
      '/plants': 'My plants'
    }

    setTitle(titleMap[path])
  }, [path])

  return (
    <header className={styles.header}>
      {/* Back icon */}
      <div className={styles.header__iconLeft}>{backIcon.visible ? backIcon.icon : null}</div>

      {/* Title */}
      <div className={styles.header__title}>{title}</div>

      {/* Menu icon */}
      <div className={styles.header__iconRight}>{actionIcon.visible ? actionIcon.icon : null}</div>

      {/* Search*/}
      <input className={styles.input__search}/>

      {/* Actions */}
      <button className={styles.button + ' ' + styles.button__search} onClick={() => alert('Still need to do this')}>
        <IoSearch size={25}/></button>

      <button className={styles.button + ' ' + styles.button__add} onClick={() => alert('Still need to do this')}>+
      </button>
    </header>
  )
}
