import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}



export default App;
