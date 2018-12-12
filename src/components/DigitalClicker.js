import React, { Component } from 'react'

class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  increaseClick = () => {
    this.setState({
      timesClicked: ++this.state.timesClicked
    })
  }

  render () {
    return (
      <button onClick={this.increaseClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
