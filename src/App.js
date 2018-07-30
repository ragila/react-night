import React, { Component } from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter nama="barcelona" />
        <Counter nama="chelsea" />
        <Counter nama="juventus" />
      </div>
    );
  }
}

export default App;

// class Header extends Component {
//   render() {
//     return <h1>Judul</h1>;
//   }
// }

class Counter extends Component {
  state = {
    number: 0
  };

  naik = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  turun = () => {
    if (this.state.number == 0) {
      return alert("gaboleh minus coyy sorry!");
    }
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
      <div>
        <h1>{this.props.nama}</h1>
        <h2>{this.state.number}</h2>
        <button onClick={this.naik}>naik</button>
        <button onClick={this.turun}>turun</button>
      </div>
    );
  }
}
