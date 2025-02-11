import './App.css';
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Login from './pages/Login';

function App() {

  return (
    <>
      <Header />
      <Nav />
      <main className=''>
        <Home />
        {location.pathname === "/login" && <Login />}
        
      </main>
      <Footer />
    </>
  )
}

export default App
