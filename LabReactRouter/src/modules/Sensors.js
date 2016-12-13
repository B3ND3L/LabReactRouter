import React from 'react'
import NavLink from './NavLink'
import styles from './Sensors.css'

export default React.createClass({

  render() {
    return (
    <div className={styles.nav}>
      <ul className={styles.liste}>
        <li><NavLink to="/TempBureau" >Temp Bureau</NavLink></li>
      </ul>
    </div>
  )}
})
