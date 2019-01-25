import * as React from 'react';
import './App.scss';
import ToDoList from "./dashboard/ToDoList/ToDoList";
import NavBar from "./NavBar/NavBar";

class App extends React.Component {
 public myTask = [
 	{
		id: 'asd12',
		isCompleted: false,
		name:'a'
 	},
	 {
		 id: 'assd12',
		 isCompleted: false,
		 name:'a'
	 },
	 {
		 id: 'asd2',
		 isCompleted: false,
		 name:'a'
	 }
 ];
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
