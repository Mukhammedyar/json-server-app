import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import AllUsers from './Components/AllUsers/AllUsers'
import AddUser from './Components/AddUsers/AddUsers'

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<AllUsers/>} />
          <Route path='/all' element={<AllUsers/>} />
          <Route path='/add' element={<AddUser/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
