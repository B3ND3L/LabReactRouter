import React from 'react'

import styles from './Sensor.css'

export default React.createClass({

  render() {
    return (
    <div className={styles.sensor}>
      <h3 className={styles.sensorTitle}>blabla</h3>
      <div className={styles.actualValue}>
        <span className={styles.title}>Valeur actuelle :</span>
        <span className={styles.value}>22°</span>
      </div>
      <div className={styles.historique}>
        <span className={styles.title}>Valeur actuelle :</span>
        <span className={styles.values}>Plusieurs valeurs</span>
      </div>
    </div>
  )}
})
