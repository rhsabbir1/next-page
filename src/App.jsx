import { Outlet } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <div className="App">
      {/* header  */}
      <Outlet></Outlet>
      {/* footer  */}
    </div>
  )
}

export default App
