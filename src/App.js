import React, { Component } from 'react'
import MapComponent from './mapcomponent'
import './index.css'

class App extends Component {
  
  state = {
    origin: [-3.7282529,-38.5359288],
    destination: [-3.7557806,-38.4907829],
    zoom: 13
  }
  
  render() {
    return (
      <MapComponent origin={this.state.origin} destination={this.state.destination} zoom={this.state.zoom} />
    )
  }
}

export default App
