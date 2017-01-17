import { Sensor, TimeSeries, Datum, Types, Parser } from './sensors';
import mqtt from 'mqtt'

export class MQTTConnector {
  constructor(url) {
    this.url = url;
    this.devices = [];

    var clientMQTT = mqtt.connect(url);

    clientMQTT.subscribe('value/#');

    clientMQTT.on('message', (topic, message) => {
      // message is Buffer
      console.log(message);
    });

  }

  set url (url){
    this.m_url = url;

  }
}
/*
  function createSensor(name, message){

    let json = JSON.parse(message);
    let id = 0;
    for (var x = 0; x < name.length; x++)
    {
        var c = name.charCodeAt(x);
        id += c;
    }
    let value = 0;
    if(json.type === 'ON_OFF'){
      if(json.value == 'ON') value = 1;
      else value = 0;
    } else if(json.type === 'PERCENT'){
      value = parseFloat(json.value)*100;
      value = Math.round(value);
    } else {
      value = parseInt(json.value);
    }

    let data = new Datum(value);
    devices[name] = new Sensor(id, name, data, json.type);
    console.log('---');
  }*/
