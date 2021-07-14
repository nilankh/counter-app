import React, { Component } from 'react'
import Counter from './counter'

class counters extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counters: [
        { id: 1, value: 4 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 },
      ],
    }
  }
  handleDelete = (counterId) => {
    // console.log('Event handler called', counterId)
    const counters = this.state.counters.filter((c) => c.id !== counterId)
    // this.setState({counters: counters}) key value same h to neechec jaisa likh h wasie likh do
    this.setState({ counters })
  }

  handleIncrement = (counter) => {
    // console.log(counter);
    const counters = [...this.state.counters]
    // Facing issue in understandin watch Removing the local state in Composing Components
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0
      return c
    })
    this.setState({ counters: counters })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className='btn-primary btn-sm m-2'>
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
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
