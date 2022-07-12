import logo from './logo.svg';
import './App.css';
import { Button, Input } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/NavBar';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Cards/>
    </div>
  );
}

export default App;
