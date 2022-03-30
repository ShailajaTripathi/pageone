import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Service from './Components/Services';
import Process from './Components/Process';

function App() {
  return (
    <div className="App">
  <Navbar/>
  <Home/>
  <Service/>
  <Process/>

    </div>
  );
}

export default App;
