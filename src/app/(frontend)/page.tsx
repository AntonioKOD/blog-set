'use client'

import React from 'react'

import Button from 'components/new-button'

import './styles.css'
import Link from 'next/link'

export default function HomePage() {


  return (
    <div className='flex mx-auto justify-center items-center h-screen mt-14'>
   <Link href="/admin"><Button/></Link>
   </div>
  )
}
