import React from 'react';
import { Route } from "wouter";


import Header from './comp/Header/Header';
import Footer from './comp/Footer/Footer';
import About from './comp/About/About';
import Landing from './comp/Landing/Landing';
import Classes from './comp/Classes/Classes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Landing />
      </Route>
      <Route path="/home">
        <Landing />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/classes">
        <Classes />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
