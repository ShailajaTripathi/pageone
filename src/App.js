import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Service from './Components/Services';
import Process from './Components/Process';
import Client from './Components/Client';
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Home/>
  <Service/>
  <Process/>
  <Client/>
<About/>
<Contact/>
    </div>
  );
}

export default App;
