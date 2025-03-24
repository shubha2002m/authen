import React from 'react'
import Navbar from './components/navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';

const App = () =>{
  return (
    <div>
      
      <Router>
      <Navbar/>
      
      <Routes>
        <Route path='/login' Component={Login}/>
        <Route path='/' exact Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        </Routes>
        
      
      <Footer/>
      
      </Router>
      </div>
  )
}

export default App;