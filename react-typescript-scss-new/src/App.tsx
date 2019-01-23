import * as React from 'react';
import './App.scss';
import Navbar from "./dashboard/NavBar/Navbar";
class App extends React.Component {
  public render() {
    return (
      <div className="App">
      	<Navbar/>
	  </div>
    );
  }
}

export default App;
