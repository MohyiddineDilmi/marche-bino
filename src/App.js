import './App.css';
import Home from './pages/home/Home';
// import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
