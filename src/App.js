import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Card from './components/Card'

class App extends Component {
  state={
    todos:[]
  }

  addtodo=(title)=>{
       this.setState({ todos: [...this.state.todos,{'title':title}] })
  }

  render(){
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <br></br>
      <Form addtodo={this.addtodo}/>
      <br></br>
      <div className="container card" style={liststyle}>
      <ul className="list-group list-group-flush">
      <Card todos={this.state.todos}/>
      </ul>
      </div>
    </div>
  );}
}

const liststyle={
  width: '30rem'
}

export default App;
