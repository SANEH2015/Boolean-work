import { useState } from 'react'


import './App.css'
import Home from './pages/Home'
import TrafficLight from './pages/TrafficLight'
import Nopage from './pages/Nopage'

import Layout from './pages/layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercise from './component/Exercise'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="TrafficLight" element={<TrafficLight />} />
          <Route path="Exercise" element={<Exercise />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
