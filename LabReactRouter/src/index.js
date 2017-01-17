import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'

import App from './modules/App'
import Sensors from './modules/Sensors'
import Sensor from './modules/Sensor'


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/sensors" component={Sensors}>
        <Route path="/sensors/:sensorName" component={Sensor}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'))
