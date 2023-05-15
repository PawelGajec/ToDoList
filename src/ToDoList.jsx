import { ToDoItem } from "./ToDoItem"

export function ToDoList ({todos, toggleToDo, deleteToDo}) {
    return (
    <ul className="list">
        {todos.length === 0 && "No ToDos"}
        {todos.map(toDo => {
            return (
            <ToDoItem 
                {...toDo} 
                key={toDo.id} 
                toggleToDo = {toggleToDo} 
                deleteToDo = {deleteToDo}
      />
    )
    })}
  </ul>
    )
}