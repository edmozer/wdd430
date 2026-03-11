import TodoItem from "./TodoItem.jsx"

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      <ul className="list">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
      {todos.length === 0 && <div className="empty">No Todos</div>}
    </>
  )
}
