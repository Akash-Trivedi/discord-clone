/**
 * author: akash trivedi
 * date-created: 
 * functionality: 
 * caller-function: 
 * performs-network-request: 
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import UserChannel from './components/UserChannel'
import Homepage from './components/Homepage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' >
          <Route path='homepage' element={<Homepage />} />
          <Route path='channels' element={<Dashboard />} >
            <Route path=':@me' element={<UserChannel />} />
            <Route path=':channelId' element={<UserChannel />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
