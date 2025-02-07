import './App.css';
import Home from './pages/Home';
import Header from './components/layout/Header';

function App() {

  return (
    <>
      <Header />
      <main className='px-[3vw]'>
        <Home />
      </main>
    </>
  )
}

export default App
