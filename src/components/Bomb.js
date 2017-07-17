// Bomb Component Code Goes Here

import React from 'react'
import PropTypes from 'prop-types'

class Bomb extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    if(this.state.secondsLeft > 0){
      return(
        <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
      )
    } else if(this.state.secondsLeft === 0) {
      return(
        <h1>Boom!</h1>
      )
    }
  }
}

Bomb.propTypes = {
  initialCount: PropTypes.integer
}

export default Bomb
