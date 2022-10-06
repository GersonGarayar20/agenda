const getDias = (n = 0) => {

  let timeDia = 1000*60*60*24

  let time = new Date().getTime()

  let ayer = new Date(time + timeDia * (n - 1))
  let hoy = new Date(time + timeDia * n)
  let mañana = new Date(time + timeDia * (n + 1))

  const dias = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
  const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

  return {
    ayer: [dias[ayer.getDay()], ayer.getDate()],
    hoy: [dias[hoy.getDay()], hoy.getDate(), meses[hoy.getMonth()], hoy.getMonth(), hoy.getFullYear()],
    mañana: [dias[mañana.getDay()], mañana.getDate()]
  }

}

export default getDias