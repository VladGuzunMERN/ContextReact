 import './App.css'
import Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import CartPage from './components/Cart'


function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<CartPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
