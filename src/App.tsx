import React from 'react';
import './App.css';
import Todos from './components/todos/todos.component';
import TodosProvider from './contexts/todos/todosContext';

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <Todos />
      </TodosProvider>
    </div>
  );
}

export default App;
