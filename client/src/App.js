/**
 * author: akash trivedi
 * date-created: 07-07-2022 19:54:33
 * functionality: wrap in routers for browser accesibility
 * caller-function: discord-clone-frontend\src\Index.js
 * performs-network-request: false
 */
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import UserPage from './components/UserPage'
import UserChannel from './components/UserChannel'
import Homepage from './components/Homepage'
import ServerChannel from './components/ServerChannel'
import AppState from './reducer/AppState'

const App = () => {
  return (
    <AppState>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='homepage' element={<Homepage />} />
            <Route path='channels' element={<UserPage />} >
              <Route path='@me' element={<UserChannel />} />
              <Route path=':channelId' element={<ServerChannel />} />
            </Route>
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppState>
  )
}

export default App
