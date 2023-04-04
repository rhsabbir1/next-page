import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div className="App">
      <h1>this is router</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default App
