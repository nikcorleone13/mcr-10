import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard'
import Departments from './pages/Departments'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
        <Routes>
        <Route path='/' element={<Dashboard />}   />
        <Route path='/departments' element={<Departments />}   />
        <Route path='/products' element={<Products />}   />
        <Route path='/products/:productName' element={<SingleProduct />}   />
        </Routes>
    </>
  )
}

export default App
