import React, { useState, useEffect } from 'react';
import axios from 'axios';

const todosApi = 'http://localhost:4000/todos';

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(todosApi).then(res => setTodos(res.data));
  }, []);

  const markTodo = (id, isComplete) => () => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      return { id: todo.id, name: todo.name, complete: isComplete };
    }));
  };
  return [todos, markTodo];
};

export default function Todos({ user }) {
  const [todos, markTodo] = useTodos();

  return (
    <div className='component' style={{ borderColor: 'gold' }}>
      <h5>{user}&apos;s todos:</h5>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.name} {!todo.complete && 'NOT '}completed
            <button onClick={markTodo(todo.id, true)}>Mark done</button>
            <button onClick={markTodo(todo.id, false)}>Mark undone</button>
          </div>
        ))
      }
    </div>
  );
}
