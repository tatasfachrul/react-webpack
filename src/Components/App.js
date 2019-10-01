import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Menu from '../Screens/Menu'
import Profile from '../Screens/Profile'
import Navigations from './Navigations'

class App extends Component {
  constructor (props) {
    super()
    this.state = {
      name: 'Arkademy'
    }
  }

  render () {
    return (
      <div>
        <Router>
          <Navigations />
          <Route path={'/menu'} component={Menu} />
          <Route path={'/profile'} component={Profile} />
        </Router>
      </div>
    )
  }
}

export default App
