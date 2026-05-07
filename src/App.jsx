import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/Landing';
import ErrorPage from './pages/ErrorPage';

function App() {
  return(
    <BrowserRouter  basename="/designkit-project">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;