import './App.css';
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Collections from './pages/Collections';
import { useSelector } from 'react-redux';
import { Bounce, ToastContainer } from 'react-toastify';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const isUserLoggedIn = useSelector(state => state.user.isUserLoggedIn);

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
      <Header
        onLoginClick={handleLoginClick}
        onSignUpClick={handleSignUpClick}
        isUserLoggedIn={isUserLoggedIn}
      />
      <Nav />
      <main className=''>
        <Routes location={state?.backgroundLocation || (location.pathname === "/login" || location.pathname === "/sign-up" ? { pathname: "/" } : location)}>
          <Route path='/' element={<Home />} />
          <Route path='/collections' element={<Collections />} />
        </Routes>

        {location.pathname === "/login" && <Login onClose={handleClose} />}
        {location.pathname === "/sign-up" && <SignUp onClose={handleClose} />}
      </main>
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </>
  )
}


export default App;
