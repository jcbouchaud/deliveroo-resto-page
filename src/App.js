import React from "react";
import Content from "./components/Content.js";
import Header from "./components/Header.js";
import axios from "axios";

class App extends React.Component {
  state = { restosData: null, counters: [] };

  handleCreateCounter = (productId, title, price) => {
    const counters = [...this.state.counters];
    const index = counters.findIndex(x => x.id === productId);
    if (index === -1) {
      const newCounter = {
        id: productId,
        value: 1,
        title: title,
        price: price
      };
      counters.unshift(newCounter);
    } else {
      counters[index].value++;
    }

    this.setState({ counters: counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if (counters[index].value === 0) {
      const removeItem = this.state.counters.filter(x => x.id !== counter.id);
      this.setState({ counters: removeItem });
    } else {
      this.setState({ counters: counters });
    }
  };

  handleTotal = () => {
    let total = 0;
    for (let i = 0; i < this.state.counters.length; i++) {
      total += this.state.counters[i].value * this.state.counters[i].price;
    }
    return total;
  };

  render() {
    return (
      <div>
        <div className="header">
          <Header
            restosData={this.state.restosData}
            handleCreateCounter={this.handleCreateCounter}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleTotal={this.handleTotal}
            counters={this.state.counters}
          />
        </div>

        <div>
          <div className="container">
            <Content
              restosData={this.state.restosData}
              handleCreateCounter={this.handleCreateCounter}
              handleIncrement={this.handleIncrement}
            />
          </div>
        </div>
      </div>
    );
  }
  async componentDidMount() {
    axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      this.setState({ restosData: response.data });
      // console.log(this.state.restosData.restaurant);
    });
  }
}

export default App;
