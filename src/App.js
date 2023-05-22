import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Cricket from './components/Cricket';
import Football from './components/Football'
import Form from './components/Form';
import Volleyball from './components/Volleyball';
import Badminton from './components/Badminton';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/cricket' exact element={<Cricket/>}/>
        <Route path='/football' exact element={<Football/>}/>
        <Route path='/volleyball' exact element={<Volleyball/>}/>
        <Route path='/badminton' exact element={<Badminton/>}/>
        <Route path='/form' exact element={<Form/>}/>
      </Routes>
      
      {/* <About/> */}
    </Router>
  );
}

export default App;
