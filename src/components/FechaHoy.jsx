import React from 'react'

export default function FechaHoy({hoy}) {

  return (
    <h2
    className='font-semibold text-xl p-2 text-center'
    >{hoy[0]} {hoy[1]} {hoy[2]}, {hoy[4]}</h2>
  )
}
