import React from 'react'
import { Sidebar } from './Sidebar'

export const Layout = ({children}) => {
  return (
    <>
        <div className='flex min-h-screen bg-slate-200'>
            <Sidebar/>
            {children}
        </div>
    </>
  )
}
