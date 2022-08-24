import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App'
import './index.css'
import { PokemonApp } from './PokemonApp'
import { TodoApp } from './TodoApp'
import CounterApp from './CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <PokemonApp/>
      <TodoApp/>
      <CounterApp/>
    </Provider>
)
