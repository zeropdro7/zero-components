import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Clock, Counter } from './components'
import './App.css'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Clock />
      <Counter />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more, this project was built
        using those technologies!!
      </p>
    </>
  )
}

export default App
