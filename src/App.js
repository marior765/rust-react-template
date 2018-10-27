import React, { Component } from 'react';

class App extends Component {
  componentDidMount() {
    fetch('compiled.wasm')
      .then(r => r.arrayBuffer())
      .then(r => WebAssembly.instantiate(r))
      .then(r => console.log(r.instance.exports.multiply(545345)))
      .then(r => console.log(r, 'x'));
  }
  render() {
    return (
      <div className="App">
        rust-react test
      </div>
    );
  }
}

export default App;