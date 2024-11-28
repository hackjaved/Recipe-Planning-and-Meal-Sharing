import React, { Component } from 'react'
import {Outlet} from 'react-router-dom'
export class Beforegetit extends Component {
  render() {
    return (
      <div>
        <Outlet/>
      </div>
    )
  }
}

export default Beforegetit
