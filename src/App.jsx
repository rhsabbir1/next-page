import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'

function App() {


  return (
    <div className="App">
      {/* header */}
      <Header></Header>
      <Outlet></Outlet>
      {/* footer  */}
      <h1 className='text-center mt-12'>This is footer</h1>
    </div>
  )
}

export default App
