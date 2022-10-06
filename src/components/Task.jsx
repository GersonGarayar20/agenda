import React from 'react'

export default function Task({id, title, completed, checked}) {

  const handleChange = () => checked(id)

  return (
    <li className='p-2 hover:bg-sky-100 hover:text-black rounded-xl transition-all'>
      <input
      className='cursor-pointer'
      type="checkbox" name="" id="" checked={completed} onChange={handleChange} />
      <span className='p-2'>
        {title}
      </span>
    </li>
  )
}
