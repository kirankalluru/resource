
import './App.css'
import Branches from './components/Branches'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  

  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/branches' element={<Branches/>}/>
      </Routes>
    </Router>
  )
}

export default App
