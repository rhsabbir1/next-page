import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {


  return (
    <div className="App">
      {/* header  */}
      <Header></Header>
      <Outlet></Outlet>
      {/* footer  */}
    </div>
  )
}

export default App
