import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    
    <div className='bg-slate-500  '>
        <h1 className='flex justify-center text-5xl p-4  align-middle text-white'>BLOG WITTH ME </h1>
        <div className=" flex  justify-between gap-4 mt-10 bg-slate-700 p-4 text-slate-300 hover:bg-slate-300 hover:text-black">
            <Link  href="/">HOME</Link>
            <Link href="/about" >ABOUT</Link>
            <Link href="/addTopic">ADD TOPIC</Link>
        </div>
    </div>
  
  )
}

export default Header
