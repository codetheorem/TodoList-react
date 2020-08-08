import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card';
import Details from './components/Details';

class App extends Component {
  state={
    todos:[],
    count: 0
  }

  componentDidMount(){
    if(localStorage.getItem('todos'))
    {this.setState({todos:JSON.parse(localStorage.getItem('todos'))},()=>{this.remaining();})
  }
    
  }

  addtodo= (todo)=>{
    this.setState({ todos: [...this.state.todos,{'title':todo.title,'done':todo.done}] },()=>{this.remaining()
    
      const parsed = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', parsed);

    })
  }

  changedone=(item) => {
    this.setState({ todos: this.state.todos.map((todo,index) => {
      if(index === item){
        todo.done = !todo.done
      }
      return todo;
    })});
    this.remaining();
    const parsed = JSON.stringify(this.state.todos);
    localStorage.setItem('todos', parsed);
  }

  remaining=()=>{
    let value = 0;
    this.state.todos.map((todo)=>{
        if(todo.done===false)
        { value++;}
      return 0;
    });
this.setState({count:value})
}

  remove=(index)=>{
    this.setState({todos: [...this.state.todos.filter((todo,i) => i !== index)]},()=>{this.remaining()
    
      const parsed = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', parsed);
    
    })
  }


  render(){
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <br></br>
      <Form addtodo={this.addtodo}/>
      <br></br>
      <Details totaltasks={this.state.todos.length} remaining={this.state.count}/>
      <br></br>
      <div className="container card" style={liststyle}>
      <ul className="list-group list-group-flush">
      <Card todos={this.state.todos} changedone={this.changedone} remove={this.remove}/>
      </ul>
      </div>
    </div>
  );}
}

const liststyle={
  width: '30rem'
}

export default App;
