import React from 'react'
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './components/layout/header/Header'
import Footer from './components/layout/footer/Footer'
import Home from './components/pages/home/Home'
import Portfolio from './components/pages/portfolio/Portfolio'

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
