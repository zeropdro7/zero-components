import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <div className="title">
        <h2>COUNTER</h2>
      </div>
      <hr className="divider"></hr>
      <div>
        <button onClick={() => setCount(count => count + 1)}>
          Count is: {count}
        </button>
      </div>
    </div>
  )
}
