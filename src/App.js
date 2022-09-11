import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Cars from './components/Cars';
import Content from './components/Content';
import Nav from './components/Nav';
import Form from './components/Form';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Content />
      <Routes>
      <Route path='/' element={<Home />} /> 
      <Route exact path='/cars' element={<Cars />} />
      <Route exact path='/form' element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
