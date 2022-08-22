import React, { useState } from 'react'
import { useGetTodosQuery } from './api/todosApi'

export const TodoApp = () => {

    const [counter, setCounter] = useState(1)
    const resp = useGetTodoQuery(counter)

    //const resp = useGetTodosQuery()
    const {data: todo= [], isLoading } = resp


  return (
    <>
        <h1>TodoApp - RK Query</h1>
        <hr />
        <h4>isLoading; {isLoading ? 'True': 'False'}</h4>
        <pre>{JSON.stringify(todo)}</pre>
        <button onClick={()=> setCounter(counter+1)}>
            Next Todo
        </button>
        <button onClick={()=> setCounter(counter-1)}>
            Prev Todo
        </button>
    </>
  )
}
