import React from 'react';
import { Link } from "react-router-dom";

//for the button in ExpenseListItem.js props.dispatch messes it all up but in ExpenseListFilter.js I can add or remove "props." from before dispatch with no conscequence, why? It is destructured off of props here so you wouldnt call props of props, I dont know why it will work either way in the other, maybe because there is only ever one dispatch?

 const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (  
    <div>
        <Link to={`/poopypooppoop/${id}`}>
        <h3>
        {description}
        </h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);


export default ExpenseListItem;

