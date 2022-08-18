import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {useSelector, useDispatch} from 'react-redux'
import { decrement, increment, incrementBy, reset } from './store/slices/counter/counterSlice'

function App() {
  const [count, setCount] = useState(0)

  const {value} = useSelector(state => state.counter)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>count is {value}</h2>
      <div className="card">
        <button onClick={() => {dispatch(decrement())}}>
          Decrement
        </button>
        <button onClick={() => {dispatch(reset())}}>
          Reset
        </button>
        <button onClick={() => {dispatch(increment())}}>
          Increment
        </button>
        <button onClick={() => {dispatch(incrementBy(5))}}>
          IncrementBy + 5
        </button>
      </div>
    </div>
  )
}

export default App
