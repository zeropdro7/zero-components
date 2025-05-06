import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <div className="card-header">
        <h2>COUNTER</h2>
      </div>
      <div className="card-body">
        <button
          type="button"
          className="btn btn-outline-dark mt-2 mb-3"
          onClick={() => setCount(count => count + 1)}
        >
          Count is: {count}
        </button>
        <p className="card-text fs-7">This is a counter button!</p>
      </div>
    </div>
  )
}
