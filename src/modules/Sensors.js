import React from 'react'
import NavLink from './NavLink'
import './Sensors.css'

class Sensors extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        value: '',
      };
  }
  render() {
    return (
    <div className='wrapper'>
      <div className='nav'>
        <ul className='liste'>
          <li><NavLink to="/sensors/TempBureau" >Temp Bureau</NavLink></li>
        </ul>
      </div>
      {this.props.children}
    </div>
  )}
}
export default Sensors;
