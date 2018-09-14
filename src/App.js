import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import Green from './components/Green'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      isOnly: false,
      product: [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
      ]
    }
  }
  textchange = (textValue) => {
    this.setState({
      searchText: textValue
    })
  }
  checkboxchange = (checkd) => {
    this.setState({
      isOnly: checkd
    })
  }
  render() {
    return (
      <div>
        <Search 
        textchange={this.textchange} 
        checkboxChange={this.checkboxchange}
        textValue={this.state.searchText}
        isOnly={this.state.isOnly}
        ></Search>
        <Green filterText={this.state.searchText} inStockOnly={this.state.isOnly} products={this.state.product}></Green>
      </div>
    );
  }
}

export default App;
