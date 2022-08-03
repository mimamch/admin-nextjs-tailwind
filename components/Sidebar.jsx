import Link from 'next/link'
import React from 'react'
import { FaCss3, FaHome , FaReact, FaShoppingCart, FaUserAlt, } from 'react-icons/fa';
import { IoMdArrowDroprightCircle } from 'react-icons/io';

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

export const Sidebar = () => {
  return (
    <nav className='px-5 py-2 w-72 bg-slate-100'>
        <div className="flex items-center pl-1 text-xs">
            <span className='mr-3 font-medium opacity-60'>HOME</span><hr className='w-full bg-slate-500/50' style={{height: 2.5 }} />
        </div>
        <div className="py-0">
            <Link href='/'>
                <a className="flex items-center justify-between w-full px-4 py-2 my-3 font-semibold tracking-wider transition duration-200 ease-in-out rounded-md hover:text-slate-100 bg-slate-200 hover:bg-slate-400"><FaHome size={25}/> HOME</a>
            </Link>
        </div>
        <div className="flex items-center pl-1 text-xs">
            <span className='mr-3 font-medium opacity-60'>MANAGE</span><hr className='w-full bg-slate-500/50' style={{height: 2.5 }} />
        </div>
        <div className="py-2">
            <Link href='/'>
                <a className="flex items-center justify-between w-full px-4 py-2 my-3 font-semibold tracking-wider transition duration-200 ease-in-out rounded-md hover:text-slate-100 bg-slate-200 hover:bg-slate-400"><FaUserAlt size={20}/>USERS</a>
            </Link>
            <Link href='/'>
                <a className="flex items-center justify-between w-full px-4 py-2 my-3 font-semibold tracking-wider transition duration-200 ease-in-out rounded-md hover:text-slate-100 bg-slate-200 hover:bg-slate-400"><FaShoppingCart size={23}/>PRODUCT</a>
            </Link>
        </div>
        <div className="flex items-center pl-1 text-xs">
            <span className='mr-3 font-medium opacity-60'>UTILITIES</span><hr className='w-full bg-slate-500/50' style={{height: 2.5 }} />
        </div>
    <div className="py-2">
            <Menu as="div" className='relative'  >
               {({open}) => {
                return  (
                    <>
                    <div className=''>
                       <Menu.Button className="flex items-center justify-between w-full px-4 py-2 mt-3 font-semibold tracking-wider transition duration-200 ease-in-out rounded-md focus:ring-4 focus:outline-none focus:ring-slate-500 hover:text-slate-100 bg-slate-200 hover:bg-slate-400 peer">
                           <FaReact className={`transition-transform duration-200 delay-200 ${open && 'rotate-90'}`} size={20}/><span className='flex items-center '>COMPONENTS <ChevronDownIcon className={` transition-transform delay-200 duration-200 w-5 h-5 ml-2 -mr-1 ${!open && '-rotate-90'}`} aria-hidden="true" /></span>
                           
                       </Menu.Button>
                   </div>
   
                   <Transition 
                       as={Fragment}
                       enter="transition ease-out duration-100"
                       enterFrom="transform opacity-0 scale-95"
                       enterTo="transform opacity-100 scale-100"
                       leave="transition ease-in duration-75"
                       leaveFrom="transform opacity-100 scale-100"
                       leaveTo="transform opacity-0 scale-95" 
                       
                   >
                       <Menu.Items className="absolute w-56 ml-10 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg -top-1/2 left-full ring-4 ring-slate-300 ring-opacity-50 focus:outline-none">
                       <div className="py-1">
                           <Menu.Item>
                           {({ active }) => (
                               <a
                               href="#"
                               className={classNames(
                                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                   'block px-4 py-2 text-sm transition-all duration-100' 
                               )}
                               >
                               Edit
                               </a>
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                               <a
                               href="#"
                               className={classNames(
                                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                   'block px-4 py-2 text-sm transition-all duration-100'
                               )}
                               >
                               Duplicate
                               </a>
                           )}
                           </Menu.Item>
                       </div>
                       <div className="py-1">
                           <Menu.Item>
                           {({ active }) => (
                               <a
                               href="#"
                               className={classNames(
                                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                   'block px-4 py-2 text-sm transition-all duration-100'
                               )}
                               >
                               Archive
                               </a>
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                               <a
                               href="#"
                               className={classNames(
                                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                   'block px-4 py-2 text-sm transition-all duration-100'
                               )}
                               >
                               Move
                               </a>
                           )}
                           </Menu.Item>
                       </div>
                       <div className="py-1">
                           <Menu.Item>
                           {({ active }) => (
                               <a
                               href="#"
                               className={classNames(
                                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                   'block px-4 py-2 text-sm transition-all duration-100'
                               )}
                               >
                               Share
                               </a>
                           )}
                           </Menu.Item>
                           <Menu.Item>
                           {({ active }) => (
                               <a
                               href="#"
                               className={classNames(
                                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                   'block px-4 py-2 text-sm transition-all duration-100'
                               )}
                               >
                               Add to favorites
                               </a>
                           )}
                           </Menu.Item>
                       </div>
                       <div className="py-1">
                           <Menu.Item>
                           {({ active }) => (
                               <a
                               href="#"
                               className={classNames(
                                   active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                   'block px-4 py-2 text-sm transition-all duration-100'
                               )}
                               >
                               Delete
                               </a>
                           )}
                           </Menu.Item>
                       </div>
                       </Menu.Items>
                   </Transition>
                   </>
                )
               }}
            </Menu>
        </div>
       
      

    </nav>
  )
}
