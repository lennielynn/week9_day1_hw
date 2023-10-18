import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from "./components/Header";
import HomePage from './Pages/HomePage';
import CarsPage from './Pages/CarsPage';
import SignInPage from './Pages/SignInPage';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return(
    <Container >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/cars' element={<CarsPage />}/>
          <Route path='/signin' element={<SignInPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}
export default App;
