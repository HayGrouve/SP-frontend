import React from 'react';
import './App.css';
import TodosProvider from './contexts/todos/todosContext';
import AppContextProvider from './utils/combineContextProviders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about/about.component';
import HistoryTable from './components/history-table.component/history-table.component';
import Navigation from './components/navigation/navigation.component';
import Table from './components/table/table.component';

function App() {
  return (
    <div>
      <AppContextProvider providers={[TodosProvider]}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Table title={'Football'} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/history">
              <HistoryTable />
            </Route>
          </Switch>
        </Router>
      </AppContextProvider>
    </div>
  );
}

export default App;
