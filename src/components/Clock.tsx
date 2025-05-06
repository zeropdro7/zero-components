import { useState, useEffect } from 'react'

export function Clock() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const [hours, minutes, seconds] = [
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  ].map(num => String(num).padStart(2, '0'))

  const hour = `${hours}:${minutes}:${seconds}`

  return (
    <div className="card">
      <div className="card-header">
        <h2>CLOCK</h2>
      </div>
      <div className="card-body">
        <button type="button" className="btn btn-outline-dark mt-1 mb-3">
          Hour: {hour}
        </button>
        <p className="card-text fs-7">This is a real time watch!</p>
      </div>
    </div>
  )
}
