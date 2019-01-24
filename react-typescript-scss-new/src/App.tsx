import * as React from 'react';
import './App.scss';
import ToDoList from "./dashboard/ToDoList/ToDoList";
import NavBar from "./NavBar/NavBar";

class App extends React.Component {
 public myTask = [{taskName:'a',id:'1'},{taskName:'b',id:'2'}];
	public render() {
    return (
      <div className="App">
      	<NavBar/>
		  <div className="dashboard">
			  <ToDoList myTask={this.myTask}/>
		  </div>
	  </div>
    );
  }
}

export default App;
