import React, { Component } from 'react'

export class Details extends Component {

    state={
        count: 0
    }

    progressstyle=()=>{
        let completed=((this.props.totaltasks-this.props.remaining)/this.props.totaltasks)*100;
        completed=String(completed);
        return{
            width: completed+'%'
        }
    }

    render() {
        return (
            <div>
                <h1 onChange={this.remaining}>Tasks:{this.props.totaltasks}</h1>
                <h5>Remaining Tasks:{this.props.remaining}</h5>
                <h5>Completed Tasks:{this.props.totaltasks-this.props.remaining}</h5>
                <div className='progress'>
                <div className="progress-bar bg-success" role="progressbar" style={{width:((this.props.totaltasks-this.props.remaining)/this.props.totaltasks)*100+'%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        )
    }
}


export default Details
