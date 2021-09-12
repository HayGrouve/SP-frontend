import React from 'react';
import './App.css';
import AppContextProvider from './utils/combineContextProviders';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about/about.component';
import HistoryTable from './components/history-table.component/history-table.component';
import Navigation from './components/navigation/navigation.component';
import Table from './components/table/table.component';
import FootballFixturesProvider from './contexts/footballFixturesContext';

function App() {
  return (
    <div>
      <AppContextProvider providers={[FootballFixturesProvider]}>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Table title={'Football'} />
            </Route>
            <Route exact path="/football/global">
              <Table title={'Football'} isGlobalFootball={true} />
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
