import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Import redux and store
import { Provider } from 'react-redux'
import store from './store'

import Navbar from './components/layout/Navbar'
import ContactList from './components/contacts/ContactList'
import Contact from './components/contacts/Contact'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Navbar} />
            <Route exact path="/" component={ContactList} />
            <Route exact path="/contact" component={Navbar} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
