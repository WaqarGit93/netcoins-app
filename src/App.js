import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Tasks from './routes/Tasks';

const App = () => {
  return (
    <Routes>
      <Route eaxct path='/' element={<Home />} />
      <Route eaxct path='/tasks' element={<Tasks />} />
    </Routes>
  )
}

export default App