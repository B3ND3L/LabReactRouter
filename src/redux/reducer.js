


export default (state = 0, action) => {
  switch (action.type) {
  case 'MQTT_UPDATE':
    return state + 1
  case 'START_MQTT':
    return state + 1
  case 'STOP_MQTT':
    return state + 1
  default:
    return state
  }
};
