import React from 'react'
import Navbar from './components/navbar';
import Squares from './components/squares';


const App = () =>{
  return (
    <div>
      <Navbar/>

      <div className='content'>
        <h1>Welcome!</h1>
        <p>Your in homepage</p>
      </div>
      <Squares/>
    </div>
  )
}

export default App;