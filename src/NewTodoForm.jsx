import { useState } from "react"

export function NewTodoForm ({ onSubmit }) {
    const [newItem, setNewItem] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
    
      onSubmit(newItem)
    
        setNewItem("")
      }
    return (
    <form onSubmit={handleSubmit} className= "new-item-form">  
    <div className= "form-row">
      <label htmlFor="item">New Item</label>
      <input 
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
            type="text" 
            id="item"
      />
    </div>
    <button className="btn glow-effect">Add 
    <svg class="glow-container">
      <rect pathLength="100" stroke-linecap="round" class="glow-blur"></rect>
      <rect pathLength="100" stroke-linecap="round" class="glow-line"></rect>
    </svg>
    </button>
  </form>
    )
}