import { BrowserRouter,Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

export default function App() {
  return (
    <div>
      <BrowserRouter>
     <Routes>
   <Route path='/' element = {<Home/>}/>
   <Route path='/about' element = {<About/>}/>
   <Route path='/sign-in' element = {<SignIn/>}/>
   <Route path='/sign-up' element = {<Signup/>}/>
   <Route path='/dashboard' element = {<Dashboard/>}/>
   <Route path='/projects' element = {<Projects/>}/>
   </Routes>
      </BrowserRouter>
    </div>
  )
}
