import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Characters from './components/pages/Characters/index.jsx';
import Home from './components/pages/Home/index.jsx';
import Monsters from './components/pages/Monsters/index.jsx';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/monsters' element={<Monsters />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
