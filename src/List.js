import React from 'react';
import "./App.css";
import Item from "./Item"
class List extends React.Component {
        // this bracket above needs to wrap everything inside of it. 
        //     including the render() and return()
renderList = () => {
    const { list } = this.props;
    // using the keyword 'this' we can grab a TON of
    // different things. In this case we chose props
    // and grabbed the prop list that we passed from app.js
    // so we can use that state information
    return list.map((list) => {
        // we created the prop here, but because it's just being passed to list -- not a component, it isn't being received anywhere
        // so you can change <list below to your other component tha tyou had - listComponent I think
    // Jump on zoom for our closeout and one of us can help you further
      return <Item key={list.id}{...list} itemClick={this.props.itemClick}/> 
    })
};
 


render() {
    return(
        <>
        <h1>List</h1>
        {this.renderList()}
        </>
    );
};

};


export default List

// So think of every "Class" as it's own function. 
// Everything inside of it needs to be 'inside' the function
// with the export either at th ebottom or at the top

// Props are... weird at first Lets start in App.js