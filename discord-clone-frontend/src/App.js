import './App.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import LoginPanel from './components/Login';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='channel' element={Dashboard} >
            <Route path=':@me' element={UserChannel} />
            <Route path=':channelId' element={UserChannel} />
          </Route>
          <Route path='login' element={Login} />
          <Route path='signup' element={Signup} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
