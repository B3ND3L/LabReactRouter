import React from 'react'

import {connect } from 'react-redux'
import './Sensor.css'

class Sensor extends React.Component {

  render() {
    return (
      <div className='sensor'>
        <h3 className='sensorTitle'>{this.props.params.sensorName}</h3>
        <div className='actualValue'>
          <span className='title'>Valeur actuelle :</span>
          <span className='value'>{this.props.value}</span>
        </div>
        <div className='historique'>
          <span className='title'>Historique :</span>
          <span className='values'>Plusieurs valeurs</span>
        </div>
      </div>
    )
  }
}

export default connect(
  (state, ownProps) => {
    let sensor = state.sensors.find((s)=>(s.name === ownProps.params.sensorName))
    return {
      id: sensor.id,
      name: sensor.name,
      value: sensor.value,
    }
  },
  (dispatch) => ({

  }))(Sensor);
