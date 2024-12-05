import { useState } from 'react';

export default function TodoList() {
  const [enteredTodo, setEnteredTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleTodoChange = (event) => {
    setEnteredTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (todos.includes(enteredTodo)) return;
    setTodos((_preState) => [..._preState, enteredTodo]);
    setEnteredTodo('');
  };

  const handleDeleteTodo = (_todo) => {
    setTodos((_preState) => _preState.filter((_ele) => _ele !== _todo));
  };

  const handleEnterPress = (event) => {
    if (event.key !== 'Enter') return;
    handleAddTodo();
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type='text'
          placeholder='Add your task'
          value={enteredTodo}
          onChange={handleTodoChange}
          onKeyPress={handleEnterPress}
        />
        <div>
          <button onClick={handleAddTodo}>Submit</button>
        </div>
      </div>
      <ul>
        {todos.map((_todo, _idx) => (
          <li key={_todo + _idx}>
            <span>{_todo}</span>
            <button onClick={() => handleDeleteTodo(_todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
