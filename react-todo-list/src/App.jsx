import { useEffect, useState } from "react"
import NewTodoForm from "./NewTodoForm.jsx"
import TodoList from "./TodoList.jsx"

const LOCAL_STORAGE_KEY = "WDD430_TODOS"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (stored == null) return []
    try {
      return JSON.parse(stored)
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) return { ...todo, completed }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="app">
      <h1 className="header">Todo List</h1>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  )
}
