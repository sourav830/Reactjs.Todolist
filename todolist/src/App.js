import React, {Component} from "react";
import Lists from './Lists';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    }
  }
  onChangeHandler = (e) => {
    this.setState({
      term: e.target.value
    });

  }
  onDeleteHandler = index =>{
    const deleteTask=[...this.state.items];
    deleteTask.splice(index,1);
    this.setState({
      items:deleteTask
    });
  }
  onFormHandler = (e) => {
    e.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }
  render() {
    return (
      <div className="App">
       
        <div>
          <input id="Appstart" type="text" value={this.state.term} placeholder="Enter a Term" onChange={this.onChangeHandler} />
          <button id="Apptext" onClick={this.onFormHandler}>Add Item</button>
         
        </div>
        <Lists deleteTask={this.onDeleteHandler} items={this.state.items}/>
        
      </div>
    )
  }
}
export default App;