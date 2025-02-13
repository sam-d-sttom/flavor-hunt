import './App.css';
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Collections from './pages/Collections';

function App() {
  const navigate = useNavigate();
  const location = useLocation();


  const handleLoginClick = () => {
    navigate("/login", { state: { backgroundLocation: location } });
  };

  const handleSignUpClick = () => {
    navigate("/sign-up", { state: { backgroundLocation: location } });
  };

  const handleClose = () => {
    if (location.state?.backgroundLocation) {
      // Go back to the previous page
      navigate(-1); 
    } else {
      // If no background location, go to home page
      navigate("/"); 
    }
  };

  const state = location.state;

  return (
    <>
      <Header onLoginClick={handleLoginClick} onSignUpClick={handleSignUpClick} />
      <Nav />
      <main className=''>

      {/* location={state?.backgroundLocation} */}
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/collections' element={<Collections />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
        
        {location.pathname === "/login" && <Login onClose={handleClose} />}
        {location.pathname === "/sign-up" && <SignUp onClose={handleClose} />}
      </main>
      <Footer />
    </>
  )
}


export default App;
