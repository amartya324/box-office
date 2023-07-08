import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred.';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/starred" element={<Starred />} />
        <Route path="*" element={<div>Not found</div>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
