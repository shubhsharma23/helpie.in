import React from 'react';
import Style from './App.module.css';
import './Home.css'
import Home from './Home'
import Color from './Constant/Color'
import Topbar from './Components/Topbar';
function App() {
  document.body.style.backgroundColor = Color.third;
  return (
    <div>
   <Home />
   </div>
  );
}



export default App;
