import { useState } from 'react'


import './App.css'
import Home from './pages/Home'
import TrafficLight from './pages/TrafficLight'
import Nopage from './pages/Nopage'
import Contact from './component/Contact'
import Layout from './pages/layout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Exercise from './component/Exercise'
import Movies from './pages/Movies'

import MovieVeiw from './pages/Movies1'



function App() {


  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="TrafficLight" element={<TrafficLight />} />
          <Route path="Exercise" element={<Exercise />} />
          <Route path="Movies"  >
          <Route index element={<Movies/>} />
          <Route  path=":id" element={<MovieVeiw/>}/>
          </Route>
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
