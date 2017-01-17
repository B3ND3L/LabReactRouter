import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory} from 'react-router'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './redux/reducer'
import App from './modules/App'
import Sensors from './modules/Sensors'
import Sensor from './modules/Sensor'

const initialState = {
  sensors : [
    {id:"1", name:"TempBureau", value: "22"},
    {id:"2", name:"TempChambre", value: "23"}
  ]
};
let store = createStore(reducer, initialState)

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/sensors" component={Sensors}>
          <Route path="/sensors/:sensorName" component={Sensor}/>
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
