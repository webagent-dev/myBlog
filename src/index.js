import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './comps/Navbar'
import { Provider } from 'react-redux'
import ReactDom from 'react-dom'
import store from './app/store'
import Auth from './comps/Auth'
import Form from './comps/Form'
import './App.css'
import Nopage from './comps/Nopage'
import News from './comps/News'



ReactDom.render(
<Provider store={store}>
  <Router>
    <Navbar />
    <Switch>
         <Route exact path='/' component={Auth}/>
         <Route exact path='/sign_Up' component={Form}/>
         <Route exact path='/news' component={News}/>
         <Route exact path='*' component={Nopage}/>
    </Switch>
  </Router>
</Provider>, 
  document.getElementById('root'))
