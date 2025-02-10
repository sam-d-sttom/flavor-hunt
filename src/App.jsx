import './App.css';
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';

function App() {

  return (
    <>
      <Header />
      <Nav />
      <main className=''>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
