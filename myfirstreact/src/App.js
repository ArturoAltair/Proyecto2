//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Number from './Number/Number';
import Header from './Header/Header';
import Resultado from './Resultado/Resultado'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [
        { numero: '0' },
        { numero: '0' }
      ]
    }
  }

  cambiaNumero = (event) => {
    this.setState({
      numbers: [
        { numero: event.target.value },
        { numero: this.state.numbers[1].numero}
      ]
    })
  }

  multiplicar = (mult) => {
    console.log('entra');
    this.setState({
      numbers: [
        { numero: this.state.numbers[0].numero },
        { numero: this.state.numbers[0].numero*mult }
      ]
    })
  }


  render() {
    return (
      <div className="App">
        <Header titulo="Multiplicar por 37 o 43" />
        <Number numero={this.state.numbers[0].numero} cambiando={this.cambiaNumero}></Number>
        <button onClick={() => this.multiplicar('37')}>Por 37</button>
        <button onClick={() => this.multiplicar('43')}>Por 43</button>
        <Resultado numero={this.state.numbers[1].numero} />
      </div>
    )
  }
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Nonono nono nono nono
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React HELL YEAH
        </a>
      </header>
    </div>
  );
}
*/


export default App;
