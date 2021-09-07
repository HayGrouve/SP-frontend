import React, { useContext, useState } from 'react';
import { TodosContext } from '../../contexts/todos';

const Todos = () => {
  const { todos, addTodo } = useContext(TodosContext);

  const [todoValue, setTodoValue] = useState('');

  return (
    <div>
      <div>
        {todos.map((todo, i) => (
          <div className="todoRow" key={i}>
            {todo}
          </div>
        ))}
      </div>
      <label htmlFor="todoValue">Please enter a todo:</label>
      <p></p>
      <input
        type="text"
        name="todo"
        id="todoValue"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
        onKeyPress={(e) =>
          e.key === 'Enter' && (addTodo(todoValue), setTodoValue(''))
        }
      />
      <button
        onClick={() => {
          addTodo(todoValue);
          setTodoValue('');
        }}
      >
        add todo
      </button>
    </div>
  );
};

export default Todos;
