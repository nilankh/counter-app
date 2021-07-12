import React, { Component } from 'react'

class counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button>Increment</button>
      </div>
    )
  }
}

export default counter
