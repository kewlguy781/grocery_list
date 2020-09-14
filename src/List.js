import React from 'react';
import "./App.css";

class List extends React.Component {
        // this bracket above needs to wrap everything inside of it. 
        //     including the render() and return()
renderList = () => {
    const { list } = this.props;
    // using the keyword 'this' we can grab a TON of
    // different things. In this case we chose props
    // and grabbed the prop list that we passed from app.js
    // so we can use that state information
    return list.map ((list) => {
      return <li key={list.id}>{list.name}</li>
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