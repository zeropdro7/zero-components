import { useState, useContext, createContext } from 'react'

type ContextType = {
  count: number
  addCount: () => void
}

const CountContext = createContext<ContextType | null>(null)

export function Counter() {
  const [count, setCount] = useState<number>(0)
  const addCount = () => setCount(prev => prev + 1)
  const contextValue = {
    count,
    addCount,
  }

  return (
    <CountContext value={contextValue}>
      <div className="card">
        <div className="card-header">
          <h2>COUNTER</h2>
        </div>
        <div className="card-body">
          <CountButton />
        </div>
      </div>
    </CountContext>
  )
}

function CountButton() {
  const context = useContext(CountContext)
  if (!context) throw new Error('CountButton must be used within a Counter')
  const { count, addCount } = context

  return (
    <>
      <button
        type="button"
        className="btn btn-outline-dark mt-2 mb-3"
        onClick={addCount}
      >
        Count is: {count}
      </button>
      <p className="card-text fs-7">This is a counter button!</p>
    </>
  )
}
