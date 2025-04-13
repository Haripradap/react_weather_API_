
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './components/Login'
import DashBoard from './components/DashBoard'
import Signup from './components/Signup';

function App() {
  

  return (
    <>
        
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/dashboard' element= {<DashBoard/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
