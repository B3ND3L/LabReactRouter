import React from 'react'

import Head from './Head'

import './App.css'

export class App extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        value: '',
      };
  }

  render(){
    return (
      <div className='app'>
        <Head />
          {this.props.children}
      </div>
    )
  }
}
export default App;
