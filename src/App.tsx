import React from 'react';
import './App.css';
import Todos from './components/todos/todos.component';
import TodosProvider from './contexts/todos/todosContext';
import AppContextProvider from './utils/combineContextProviders';

function App() {
  return (
    <div className="App">
      <AppContextProvider providers={[TodosProvider]}>
        <Todos />
      </AppContextProvider>
    </div>
  );
}

export default App;
