import { Outlet } from 'react-router-dom'
import { Header } from './components'

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default App
