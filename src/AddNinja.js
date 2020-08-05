import React, {Component} from 'react';

class AddNinja extends Component {
    state= {
        name: null,
        age: null,
        belt: null
    }
    ChangeHandler = (e) => {
        this.setState({
            [e.target.id]: [e.target.value]
        })
    }
    SubmitHandler = (e) => {
        e.preventDefault(); 
         this.props.addNinja(this.state);
         console.log(this.state);
    }
    render() {
        return(
            <div>
                <form onSubmit={this.SubmitHandler}>
                    <label htmlFor="name">Name : <input  type="text" id="name" onChange={this.ChangeHandler}></input></label>
                    <br/><label htmlFor="age">Age : <input  type="text" id="age" onChange={this.ChangeHandler}></input></label>
                    <br/><label htmlFor="belt">Belt : <input  type="text" id="belt" onChange={this.ChangeHandler}></input></label>
                    <br/><button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja;