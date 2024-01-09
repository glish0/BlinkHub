import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftSideBar = () => {
  return (
    <>
    <div className='h-screen left-0 top-0 overflow-auto px-10 py-6 flex flex-col gap-6 custom-scrollbar::-webkit-scrollbar'>
     <Link href="/" className='text-black'>
     <p className="no-underline">The quick brown fox ...</p>
      </Link>
    </div>
  
    </>
   ) 
}

export default LeftSideBar
