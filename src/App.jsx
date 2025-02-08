
import './App.css'
import Login from './components/Forms/Login'
import Register from './components/Forms/Register'
// import Branches from './components/Branches'
// import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    
    <Router>
      <Navbar/>
      {/* <Login/> */}
      <Register/>
      <Routes>
        {/* <Route path='/' element={<Home/>}/>
        <Route path='/branches' element={<Branches/>}/> */}
      </Routes>
    </Router>
  )
}

export default App
