import React, { Component } from 'react'

class counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      tags: ['tag1', 'tag2', 'tag3'],
    }
  }

renderTags(){
    if(this.state.tags.length === 0) return <p>There are no Tags!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    )
}

  render() {
    return (
      <div>
        {this.renderTags()}
      </div>
    )
  }
}

export default counter
