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
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  ].map(num => String(num).padStart(2, '0'))

  const date = `${day}/${month}/${year}`
  const hour = `${hours}:${minutes}:${seconds}`

  return (
    <div className="card">
      <div className="title">
        <h2>CLOCK</h2>
        <hr className="divider"></hr>
      </div>
      <div>
        <h4>Date: {date}</h4>
        <h3>Hour: {hour}</h3>
      </div>
    </div>
  )
}
