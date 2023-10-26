import './App.css'
import Blank from './problems/Blank'
import Completed from './problems/Completed'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
      <div className='standard'>
      <Routes>
        <Route path="/" element={<Blank></Blank>}></Route>
        <Route path="/completed"element={<Completed></Completed>}></Route>
        </Routes>
      </div>
    )
}

export default App
