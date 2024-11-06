import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Viewall from './components/Viewall';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/viewall' element={<Viewall />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
