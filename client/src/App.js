import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Import redux and store
import { Provider } from 'react-redux'
import store from './store'

import NavbarContact from './components/layout/NavbarContact'
import NavbarHome from './components/layout/NavbarHome'
import NavbarAdd from './components/layout/NavbarAdd'
import ContactList from './components/contacts/ContactList'
import Contact from './components/contacts/Contact'
import CreateContact from './components/create-contact/CreateContact'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={NavbarHome} />
            <Route exact path="/" component={ContactList} />
            <Route exact path="/contact/:id" component={NavbarContact} />
            <Route exact path="/contact/:id" component={Contact} />
            <Route exact path="/contact/add" component={NavbarAdd} />
            <Route exact path="/contact/add" component={CreateContact} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
