import React from 'react'
import {HiPencilAlt} from "react-icons/hi"
import RemoveBtn from "./RemoveBtn"
import Link from 'next/link'


const getTopics =async()=>{
  try {
const res=    await fetch('http://localhost:3000/api/topics',{
      cache:'no-store'
    })
    if(!res.ok){
      throw new Error("failed to fetch")
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
async function Posts() {


  const {topics }= await getTopics(); 
  return (
    <>
    {
      topics.map(t=>(
    <div className=' border border-slate-800 p-6 m-4'>
      <div >
        <h1 className='font-bold text-5xl'>{t.title}</h1>
        <p className='p-3'>{t.description}</p>
      </div>
      <div className='flex justify-end gap-4 mt-4'>
      <RemoveBtn id={t._id}/>
      <Link href='/editTopic'>
      <HiPencilAlt className='text-blue-300' size={24}/>
      </Link>
      </div>
    </div>
    ))
  }
    </>
  )
  
}

export default Posts
