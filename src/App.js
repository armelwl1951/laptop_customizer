import React, { Component } from "react";
import "./App.css";
import MainForm from "./components/MainForm";
import Cart from "./components/Cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200
        },
        "Video Card": {
          name: "Toyota Corolla 1.5v",
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    };
  }

  USCurrencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });

  updateFeature = (feature, newValue) => {
    console.log("feature:", feature, "newValue:", newValue);
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };
  render() {
    const { features } = this.props;

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <MainForm
            features={features}
            handleUpdate={this.updateFeature}
            format={this.USCurrencyFormat}
            selected={this.state.selected}
          />

          <Cart
            cartOptions={this.state.selected}
            selectedOptions={Object.keys(this.state.selected)}
            format={this.USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}

export default App;