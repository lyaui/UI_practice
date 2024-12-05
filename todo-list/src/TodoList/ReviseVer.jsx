import { useState } from 'react';

const idGenerator = (() => {
  let id = 0;
  return () => id++;
})();

const INITIAL_TASKS = [
  { id: idGenerator(), label: 'Walk the dog' },
  { id: idGenerator(), label: 'Water the plants' },
  { id: idGenerator(), label: 'Wash the dishes' },
];

class Todo {
  constructor(label) {
    this.id = idGenerator();
    this.label = label.trim();
  }
}

export default function TodoList() {
  const [enteredTodo, setEnteredTodo] = useState('');
  const [todos, setTodos] = useState(INITIAL_TASKS);

  const handleTodoChange = (event) => {
    setEnteredTodo(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (enteredTodo.trim() === '') return;
    const newTodo = new Todo(enteredTodo);
    setTodos((_preState) => [..._preState, newTodo]);
    setEnteredTodo('');
  };

  const handleDeleteTodo = (id) => {
    setTodos((_preState) => _preState.filter((_ele) => _ele.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleAddTodo}>
        <input
          type='text'
          aria-label='Add your task'
          placeholder='Add your task'
          value={enteredTodo}
          onChange={handleTodoChange}
        />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
      <ul>
        {todos.map((_todo) => (
          <li key={_todo.id}>
            <span>{_todo.label}</span>
            <button onClick={() => handleDeleteTodo(_todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
