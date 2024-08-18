
'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import {HiOutlineTrash} from "react-icons/hi"

function RemoveBtn({id}) {
  const router  = useRouter()
  const deleteTopic=async()=>{
    const confirmed=confirm('Are You Sure')
    if(confirmed){
     const res= await fetch(`http://localhost:3000/api/topics?id=${id}`,{
        method:"DELETE"
      })
      if(res.ok){
        router.refresh()
      }
    }
   
  }
  return (
   <button onClick={deleteTopic} className='text-red-700'>
    <HiOutlineTrash size={24}/>
   </button>
  )
}

export default RemoveBtn
