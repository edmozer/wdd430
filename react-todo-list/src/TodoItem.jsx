export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label className="todo-left">
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        <span className={completed ? "todo-title completed" : "todo-title"}>{title}</span>
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  )
}
