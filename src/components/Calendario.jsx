import {useState, useEffect} from 'react'
import getDias from '../services/getDias'
import FechaHoy from './FechaHoy'
import FechaSlider from './FechaSlider'
import TaskList from './TaskList'
import { motion } from "framer-motion"

const initialState = {
  ayer: [],
  hoy: [],
  mañana: []
}

export default function Calendario() {

  const [fecha, setFecha] = useState(initialState)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setFecha(getDias(count))
  }, [count])

  const menos = () => {setCount(count-1)}
  const mas = () => {setCount(count+1)}

  return (
    <motion.div
    layout
    transition={{duration:0.2}}
    className='bg-neutral-900 w-full h-full md:h-auto text-sky-100 md:w-64 md:rounded-3xl p-4'>

      <FechaHoy hoy={fecha.hoy}/>
      <FechaSlider dias={fecha} mas={mas} menos={menos} />
      <TaskList hoy={fecha.hoy}/>
     
    </motion.div>
  )
}
