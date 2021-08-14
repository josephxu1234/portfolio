import './App.css';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  {/*change colors?*/}
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar/>
      <About/>
    </main>
  );
}

export default App;
