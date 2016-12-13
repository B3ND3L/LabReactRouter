import React from 'react'

import styles from './Head.css'

export default React.createClass({

  handleSubmit(event) {
    event.preventDefault()
    const url = event.target.elements[0].value
    console.log(url)
  },

  render() {
    return (
    <div className={styles.header}>
      <form onSubmit={this.handleSubmit}>
        <p>URL du Brocker : </p>
        <input className={styles.url} id="url" type="text" placeholder="ws://mqtt.server.com"/>
      </form>
    </div>
  )}
})
