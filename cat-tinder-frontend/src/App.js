import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import PageNotFound from './pages/PageNotFound'
import Header from './Header'
import Home from './pages/Home'
import catList from './data/catList.js'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: catList
    }
  }
  render() {
    return (
      <div>
	<Header />
	<Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cats" exact render={(props) => <Cats cats={this.state.cats}/>} />
            <Route path="/newcat" exact component={NewCat} />
            <Route component={PageNotFound}/>
	        </Switch>
        </Router>
      </div>
    )
  }
}

export default App
