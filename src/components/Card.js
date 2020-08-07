import React, { Component } from 'react';

class Card extends Component{
    render(){
    return this.props.todos.map((todo)=>(
            <li className="list-group-item" style={liststyle}><input type="checkbox" aria-label="Checkbox for following text input" style={checkbox}></input>  {todo.title}</li>
    ));}
}

const liststyle={
    textAlign: 'left',
    fontSize: '20px'
}

const checkbox={
    marginRight: '10px'
}
export default Card;