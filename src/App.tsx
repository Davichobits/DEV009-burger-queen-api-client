//Components
import { Login } from './components/Login'

// fetch('http://localhost:8080/orders')
// .then(res => res.json())
// .then(data => console.log(data))

function App() {
  

  return (
    <main className='grid place-content-center justify-center  h-[100vh]'>
      <Login />
    </main>
  )
}

export default App
