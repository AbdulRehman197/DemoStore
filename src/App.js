import React, { Component } from 'react';
import Dashboard from './containers/Dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <div style = {{width:'70%' ,margin:'auto',border:'1px gray solid'}}>
       <Dashboard />
      </div>
    );
  }
}

export default App;
