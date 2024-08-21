import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/pages/Home'
import TrafficLight from './assets/pages/TrafficLight'
import Nopage from './assets/pages/Nopage'
import ReactDOM from "react-dom/client";
import Layout from './assets/pages/layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercise from './assets/component/Exercise'

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
