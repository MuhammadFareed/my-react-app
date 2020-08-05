import React, {Component} from 'react';
import Ninja from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      {name : 'Fareed', age : 23, id : 0},
      {name : 'Farhan', age : 24, id : 1},
      {name : 'Ali', age : 25, id : 2}
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let abc = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: abc
    });
  } 
  deleteHandler= (id) => {
      console.log(id);
      let updatedState = this.state.ninjas.filter(ninja => {
        return ninja.id !== id;
      });     
      this.setState({
        ninjas: updatedState
      });
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App!!!</h1>
        <p>Wellcome :) </p> <br/>
        <Ninja deleteNinja={this.deleteHandler} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}
export default App;
