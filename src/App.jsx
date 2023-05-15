import { useEffect, useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { ToDoList } from "./ToDoList"

export default function App() {
  
  const [todos, setTodos] = useState(() => {
     const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addToDo (title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }
  
  

  function toggleToDo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(toDo => {
        if (toDo.id === id) {
          return { ...toDo, completed}
        }

        return toDo
      })
    })

  }
  function deleteToDo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(toDo => toDo.id !== id)
    })
  }

  return (
  <>
    <NewTodoForm onSubmit={addToDo} />
    <h1 className="header">ToDo List </h1>
    <ToDoList todos = {todos} toggleToDo = {toggleToDo} deleteToDo = {deleteToDo}/>
  </>
  )
}