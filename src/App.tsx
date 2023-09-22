//Components
import { Login } from './components/Login'
import { Ordering } from './components/Ordering'
import { useLocalStorage } from './custom-hooks/useLocalStorage';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  const [token]  = useLocalStorage('token')
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/ordering' element={token ? <Ordering /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
