import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Alarm from './Components/Alarm'
import WorldClock from './Components/WorldClock'
import Stopwatch from './Components/Stopwatch'
import Timer from './Components/Timer'
import ToggleSwitch from './Components/ToggleSwitch'

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/alarm' element={<Alarm/>}/>
        <Route path='/worldClock' element={<WorldClock/>}/>
        <Route path='/stopwatch' element={<Stopwatch/>}/>
        <Route path='/timer' element={<Timer/>}/>
        <Route path='/toggle' element={<ToggleSwitch/>}/>
      </Routes>
    </Router>
  )
}

export default App
