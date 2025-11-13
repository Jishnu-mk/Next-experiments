import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <>
     <BrouserRouter>
     <Routes>
      <Route path="/" element={<Home/>} />
<Route path="/home" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact/>} />

     </Routes>
     </BrouserRouter>
    </>
  )
}

export default App
