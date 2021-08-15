import './App.css';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Error from './components/Error.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  {/*change colors?*/ }
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={About} />
          <Route component={Error} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
