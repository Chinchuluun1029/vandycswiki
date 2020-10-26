import React from 'react';
import { Route, Switch } from "wouter";

import Header from './comp/Header/Header';
import Footer from './comp/Footer/Footer';
import About from './comp/About/About';
import Landing from './comp/Landing/Landing';
import Classes from './comp/Classes/Classes';
import Graph from './comp/Graph/Graph';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/"><Landing /></Route>
        <Route path="/home"><Landing /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/classes"><Classes /></Route>
        <Route path="/graph"><Graph /></Route>
        <Route>404, not found</Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
