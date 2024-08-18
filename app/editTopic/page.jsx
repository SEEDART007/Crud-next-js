import React from 'react'

function page() {
  return (
    <div className='mt-10 '>
      <form className=' flex flex-col gap-12  max-w-96 m-auto'>
        <input className=' border border-slate-600 h-12' type="text" placeholder='Update Title'/>
        <textarea className=' border border-slate-600 h-24' type="text" placeholder='Update Description'/>
        <button className=' w-fit p-5 font-bold bg-blue-300 text-black'>Update Topic</button>
      </form>

    </div>
  )
}

export default page

