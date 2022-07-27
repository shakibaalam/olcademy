
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Components/Contact';
import Display from './Components/Display';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup></Signup>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/display' element={<Display></Display>}></Route>
      </Routes>

    </div>
  );
}

export default App;
