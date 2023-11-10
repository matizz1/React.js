import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Hero';
import Want from './Want';
import Underhero from './Underhero';
import Clode from './Clode';
import Cards from './Cards';


function App() {
  return (
  <div id="all">
    <Navbar/>
    <Hero/>
    <Want/>
    <Underhero/>
    <Clode/>
    <Cards/>
  </div>
  );
}

export default App;
