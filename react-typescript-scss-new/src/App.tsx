import Button from '@material-ui/core/Button';
import * as React from 'react';
import './App.scss';
class App extends React.Component {
  public render() {
    return (
      <div className="App">
		  <Button variant="contained" color="primary">
			  Hello World
		  </Button>
      </div>
    );
  }
}

export default App;
