import './App.css';
import Home from './pages/Home';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {

  return (
    <>
      <Header />
      <main className=''>
        <Home />
      </main>
      <Footer />
    </>
  )
}

export default App
