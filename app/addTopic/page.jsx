'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function page() {
  const router = useRouter()
  const[title,setTitle]=useState('')
  const[description,setDesc]=useState('')
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!title||!description){
      alert('both title and description are required')
    }
    try {
     const res= await fetch('http://localhost:3000/api/topics',{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({title,description})
      })
      if(res.ok){
        router.push('/')
      }else{
        throw new Error("failed to post")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='mt-10 '>
      <form  onSubmit={handleSubmit} className=' flex flex-col gap-12  max-w-96 m-auto'>
        <input onChange={(e)=>setTitle(e.target.value)} className=' border border-slate-600 h-12' type="text" placeholder='Title'/>
        <textarea onChange={(e)=>setDesc(e.target.value)} className=' border border-slate-600 h-24' type="text" placeholder='Description'/>
        <button className=' w-fit p-5 font-bold bg-green-600 text-black'>Add Topic</button>
      </form>

    </div>
  )
}

export default page
