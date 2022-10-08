import { useState, useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid';
import Task from './Task';
import { motion } from "framer-motion"

const KEY = "tasks"

export default function TaskList({hoy}) {

  const [tasks, setTasks] = useState([])
  const input = useRef()

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem(KEY))
    if (Array.isArray(data)) setTasks(data)
  },[])

  useEffect(()=>{
    localStorage.setItem(KEY, JSON.stringify(tasks))
  },[tasks])


  const handleSubmit = (e) => {
    e.preventDefault()

    let titulo = input.current.value
    if (titulo === "") return

    const newTask = {
      id: uuid(),
      title: input.current.value,
      completed: false,
      day: hoy[1],
      month: hoy[3],
      year: hoy[4],
    }
  
    setTasks(prev=>[...prev, newTask])

    input.current.value = ""
  }

  const checked = (id) => {
    const marcados = tasks.map(task=>{
      if (task.id === id) task.completed = !task.completed 
      
      return task
    })
    setTasks(marcados)
  }

  const borrarCompletados = () => {
    const des = tasks.filter(task=>!task.completed)
    setTasks(des)
  }

  const rename = (id, title) => {
    const nuevoNombre = tasks.map(task=>{
      if(id=== task.id) task.title = title
      
      return task
    })
    setTasks(nuevoNombre)
  }


  return (
    <div className='flex flex-col justify-between'>
      <ul className="md:max-h-32 max-h-60 list py-1 overflow-auto">
      {
        tasks.map((item)=>{
          const {id, title, completed, day, month, year} = item
          if (day === hoy[1] && month === hoy[3] && year === hoy[4]) {
            
            return(
                <Task 
                key={id}
                id={id}
                title={title}
                completed={completed}
                checked={checked}
                rename={rename}
                />
            ) 
          }
        })
      }
      </ul>

      <motion.div layout>
        <form
        onSubmit={handleSubmit}>
          <input 
          className='bg-neutral-900 border-b border-neutral-400 hover:border-neutral-100 w-full p-2 mb-2 transition-all'
          ref={input} type="text"
          placeholder='new event'/>
          <input className='p-2 hover:bg-neutral-800 rounded cursor-pointer' type="submit" value="Add" />
          <input className='p-2 hover:bg-neutral-800 rounded cursor-pointer' type="button" value="Delete completed" onClick={borrarCompletados} />
        </form>
      </motion.div>
      
    </div>
  )
}
