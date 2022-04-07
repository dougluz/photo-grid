import React from 'react'
import './header.css'
import logo from '../../logo.svg'
import { Button } from '../Button'
import Icon from '@mdi/react'
import { mdiAccount } from '@mdi/js'

export const Header = () => (
  <header className='header'>
    <div className="container header-container">
      <div className="logo-container">
        <img className='logo' src={logo} />
        <span>Photo Grid</span>
      </div>
      <Button>
        <Icon path={mdiAccount} size={1} />
        Sign in</Button>
    </div>
  </header>
)