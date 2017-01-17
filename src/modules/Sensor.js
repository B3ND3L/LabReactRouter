import React from 'react'

import './Sensor.css'

class Sensor extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        value: '',
      };
  }

  render() {
    return (
      <div className='sensor'>
        <h3 className='sensorTitle'>{this.props.params.sensorName}</h3>
        <div className='actualValue'>
          <span className='title'>Valeur actuelle :</span>
          <span className='value'>22°</span>
        </div>
        <div className='historique'>
          <span className='title'>Valeur actuelle :</span>
          <span className='values'>Plusieurs valeurs</span>
        </div>
      </div>
    )
  }
}
export default Sensor;
