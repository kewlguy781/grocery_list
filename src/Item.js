// this is for part where it is listed as <list items>

import React from 'react';
import "./App.css";
// import List from "./List";



const Items = ({ id, name, complete, itemClick }) => (
<li
style={ complete ? {...styles.item, ...styles.complete} : styles.item } onClick={()=> itemClick(id)} >
    {name}
</li>
);

// So here we need to know where itemClick is coming from. Is that coming from a different component?
// i think app? 

// I think this component wants to be rendered inside List.js right?

const styles = {
    item: {cursor: 'pointer'},
    complete: {color: 'light grey', textDecoration:'line-through'}
}

export default Items;;