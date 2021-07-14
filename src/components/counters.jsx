import React, { Component } from 'react'
import Counter from './counter'

class counters extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className='btn-primary btn-sm m-2'>
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            // value={counter.value}
            // id={counter.id} itna saara alag alag likh ke kya fayda direct counter object hi likh dete h all these properties of counter object only, agar koi new feature add hua, toa fir aa ke new props = {} aise likhna hoga isse aacha h direct show kar le
            counter={counter}
          />
        ))}
      </div>
    )
  }
}

export default counters
