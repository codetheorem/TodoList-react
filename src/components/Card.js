import React, { Component } from 'react';

class Card extends Component{
       
    getStyle=(done)=>{
        return{
            textAlign: 'left',
            fontSize: '20px',
            textDecoration: done ? 'line-through' : 'none'
        }
    }

    checked=(item,index)=>{
          if(item.done===true){
              this.props.changedone(index);
              this.getStyle(item);
          }
          else
          this.props.changedone(index);
          this.getStyle(item);
    }


    render(){
    return this.props.todos.map((todo,index)=>(
            <li className="list-group-item" style={this.getStyle(todo.done)} key={index}><input type="checkbox"  aria-label="Checkbox for following text input" style={checkbox} onChange={()=>{this.checked(todo,index); this.getStyle(!todo.done); }}></input>  {todo.title} <button onClick={()=>{this.props.remove(index)}} style={removebtn} className='btn btn-danger'>X</button></li>
    ));}
}

const checkbox={
    marginRight: '10px'
}

const removebtn={
    float: 'right'
}
export default Card;