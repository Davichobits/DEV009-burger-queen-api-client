//Components
import { Login } from './components/Login'
import { Ordering } from './components/Ordering'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useState } from "react";

function App() {
  const [token, setToken] = useState("");
  
  const handleLogin = (token: string) => {
    setToken(token)
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login onLogin={handleLogin} />} />
        <Route path='/ordering' element={token ? <Ordering /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
