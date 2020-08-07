import React, { Component } from 'react';

class Form extends Component{
    state={
        title: '',
    }

    change = (e)=> this.setState({title: e.target.value});
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.addtodo(this.state.title);
        this.setState({title:''});
    }

    render(){
    return(
        <div>
            <input type="text" placeholder='Enter Task' onChange={this.change} value={this.state.title} style={inputstyle}></input>
            <input type='submit' onClick={this.onSubmit} value='Add' style={btn}></input>
        </div>
    );}
    
}

const inputstyle={
    height: '50px',
    width: '250px',
    textAlign: 'center'
}

const btn={
    height: '50px',
    width: '80px',
    backgroundColor: '#0398fc',
    borderRadius: '10px',
    marginLeft: '10px',
    borderColor : '#0398fc',
    color: 'white'
}

export default Form;