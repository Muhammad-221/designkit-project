import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/Landing';

function App() {
  return(
    <BrowserRouter basename="/designkit-project">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;