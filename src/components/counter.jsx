import React, { Component } from 'react'

class counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
  }
  styles = {
    fontSize: 200,
    fontWeight: 'bold',
  }

  render() {
    return (
      <div>
        <span style={this.styles} className='badge badge-primary m-2'>
          {this.state.count}
        </span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
      </div>
    )
  }
}

export default counter
