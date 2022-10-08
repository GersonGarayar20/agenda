import React,{useState} from 'react'

export default function Task({id, title, completed, checked, rename}) {

  const [active, setActive] = useState(false)
  const [texto, setTexto] = useState("")

  const handleChecked = () => checked(id)
  const handleTexto = (e) => setTexto(e.target.value)
  const handleClick = () => {
    if (active) {
      rename(id, texto)
      setActive(false)
    }else{
      setTexto(title)
      setActive(true)
    }
  }


  return (
    <div className='pr-2 rounded-xl transition-all flex gap-2 justify-between'>
      <div className='flex'>
      <input
      className='cursor-pointer'
      type="checkbox" name="" id="" checked={completed} onChange={handleChecked} />
      {
        active
        ? <input className='bg-neutral-900 w-full p-2 outline outline-1' type="text" onChange={handleTexto} value={texto}/>
        : <span className='p-2'>{title}</span>
      }
      </div>
      

      <button onClick={handleClick}
      className="text-neutral-600 hover:text-neutral-300">
        {
          active
          ? <i className="fa-solid fa-check"></i>
          : <i className="fa-solid fa-pen"></i>
        }
      </button>
    </div>
  )
}
