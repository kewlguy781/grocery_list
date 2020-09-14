import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List";

class App extends Component {
  state = {
    list: [
      {id: 1, name: "Bread", complete: true},
      {id: 2, name: "Milk", complete: false},
      {id: 3, name: "Cheese", complete: false},
      {id: 4, name: "Wine", complete: false} ,
    ]
  }

  render() {
    // const {list} = this.state;
    return (
      <>
        <List list={this.state.list} />
       {/* so here we create a prop called list and set it to the 
       value of this.state.list */}
        {/* so that means in our List.js file we can 'catch' that prop
        and use those values. */}
        {/* so back to list.js */}
      </>        
    );
  }
}

export default App;
