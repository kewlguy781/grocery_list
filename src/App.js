import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./List";
import ListForm from "./ListForm";

class App extends Component {
  state = {
    list: [
      {id: 1, name: "Bread", complete: true},
      {id: 2, name: "Milk", complete: false},
      {id: 3, name: "Cheese", complete: false},
      {id: 4, name: "Wine", complete: false} ,
    ]
  }

  handleClick = (id) => {
    console.log(id);
    const { list } = this.state;

    const newList = list.map((list) => {
      if (list.id === id) {
        return {
          ...list,
          complete: !list.complete,
        };
      }
      return list;
    });

    this.setState({
      list: newList,
    });
  };


  addItem = (name) => {
    const {list} = this.state;
    const newItem = {name: name, id:Math.random(), complete:false }
    this.setState({
      list: [...list, newItem],
    })
  }

  render() {
    // const {list} = this.state;
    return (
      <>
        <List list={this.state.list} itemClick={this.handleClick} />
        {/* yes! ok so we are passing the prop correctly, now to receive it correctly. Back on List */}
       {/* so here we create a prop called list and set it to the 
       value of this.state.list */}
        {/* so that means in our List.js file we can 'catch' that prop
        and use those values. */}
        {/* so back to list.js */}
             
      <hr />
      <ListForm addItem={this.addItem} />
      </> 
    );
  }
}

export default App;
