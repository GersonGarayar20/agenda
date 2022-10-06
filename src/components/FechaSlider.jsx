import { motion } from "framer-motion"
import { useState } from "react"

function Card({dia, active, click}) {

  
  return(
    <div 
    onClick={()=>click()}
    className={`${active&&"bg-neutral-800"} cursor-pointer text-neutral-300 hover:bg-neutral-800 flex flex-col items-center p-2 rounded-xl w-16 h-16 `}>
      <p className="text-xs text-neutral-400">{dia[0]}</p>
      <p className={`text-xl font-semibold ${active&&"text-white"}`}>{dia[1]}</p>
    </div>
  )
}



export default function FechaSlider({dias, mas, menos}) {
  
  const [move, setMove] = useState(0)

  
  const left = (e) => {
    menos()
    setMove(-1)
    setTimeout(()=>{setMove(0)},400)
  }
  const right = (e) => {
    mas()
    setMove(1)
    setTimeout(()=>{setMove(0)},400)
  }
  

  return (
    <div className='flex py-2 justify-center'>
      <motion.button
      whileTap={{scale:0.8}}
      className='w-8 text-neutral-400 hover:text-white'
      onClick={left}>
        <i className="fa-solid fa-angle-left"></i>
      </motion.button>

      <motion.div
      animate={move > 0 ?{x:[10,0]}:move< 0?{x:[-10,0]}:{x:0}}
      transition={{duration:0.4}}
      className="flex gap-1">

      <Card dia={dias.ayer} click={left}/>
      <Card dia={dias.hoy} active={true}/>
      <Card dia={dias.mañana} click={right}/>

      </motion.div>
      
      <motion.button
      whileTap={{scale:0.8}}
      className='w-8 text-neutral-400 hover:text-white'
      onClick={right}>
        <i className="fa-solid fa-angle-right"></i>
      </motion.button>

    </div>
  )
}
