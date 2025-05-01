import { useState, useEffect } from 'react'

export function Clock() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const [year, month, day, hours, minutes, seconds] = [
    now.getFullYear(), now.getMonth() + 1, now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds()
  ].map((num) => String(num).padStart(2, '0'));

  const date = `${day}/${month}/${year}`
  const hour = `${hours}:${minutes}:${seconds}`

  return (
    <div>
      <h1>CLOCK</h1>
      <h3>Date: {date}</h3>
      <h2>Hour: {hour}</h2>
    </div>
  )
}
