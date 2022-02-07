import React, { Component } from 'react';
import styles from './GameTimer.module.css';

class GameTimer extends Component {
  componentDidMount() {
    this.timerId = setInterval(this.handleTick, 1000);
  }
  
  render() {
    return (
      <div className={`${styles.GameTimer} flex-h`}>
      00:00
    </div>
    )
  }
}

export default GameTimer;
