import React from 'react'

import './Head.css'

class Head extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        list: [],
      };
  }

  handleSubmit(event) {
    event.preventDefault()
    const url = event.target.elements[0].value
    console.log(url)
  }

  render() {
    return (
      <div className='header'>
        <form onSubmit={this.handleSubmit}>
          <p>URL du Brocker : </p>
          <input className='url' id="url" type="text" placeholder="ws://mqtt.server.com"/>
        </form>
      </div>
    )
  }
}
export default Head;
