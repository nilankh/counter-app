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

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
          />
        ))}
      </div>
    )
  }
}

export default counters
