import React, { Component } from 'react'

class navbar extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-light bg-light'>
          <a href='#' className='navbar-brand'>
            Navbar{' '}
            <span className='badge badge-pill badge-secondary'>
              {this.props.totalCounters}
            </span>
          </a>
        </nav>
      </div>
    )
  }
}

export default navbar
