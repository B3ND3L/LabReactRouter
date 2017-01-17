import React from 'react'
import NavLink from './NavLink'
import {connect} from 'react-redux'
import './Sensors.css'

class Sensors extends React.Component {

  render() {

   let list = [];
   for(var i=0 ; i < this.props.sensors.length;i++){
     list.push(<li key={i}><NavLink to={"/sensors/"+this.props.sensors[i]} >{this.props.sensors[i]}</NavLink></li>);
   }
    return (
    <div className='wrapper'>
      <div className='nav'>
        {list}
      </div>
      {this.props.children}
    </div>
  )}
}
export default connect((state, ownProps) => {
  let sensors = state.sensors;
  let names = [];
  for (var s in sensors){
    if (Object.prototype.hasOwnProperty.call("name", s)) {
      names.push(sensors[s].name);
    }
  }
  return {
    sensors: names,
  }
},
(dispatch) => ({

}))(Sensors);
