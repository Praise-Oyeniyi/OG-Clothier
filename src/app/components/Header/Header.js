import React from 'react'
import Banner from './Banner'
import Nav from './Nav'

export default function Header() {
  return (
    <header className='w-full space-y-9'>
        <Nav/>
        <Banner/>
    </header>
  )
}
