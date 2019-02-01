import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import PageNotFound from './pages/PageNotFound'
import Header from './Header'
import Home from './pages/Home'
import catList from './data/catList.js'
import {getCats, createCat} from './api'


class App extends Component {
  constructor(props){
		super(props)
		this.state = {
			cats: [],
      newCatSuccess: false
		}
	}

  componentWillMount(){
    //Before it loads, it calls getApiData
    this.getApiData()
  }

getApiData = () =>{
  //get cat data from DB
  getCats()
  //when promise is fufilled
  .then(catsResponse => {
    this.setState({
      //set state to the cats json payload
      cats:catsResponse
    })
  })
}

//Takes form data from create new cat page
handleNewCat = (formData) => {
  //calls the create cat API with the form data
  createCat(formData)
  //when promise is fufilled
  .then(successCat => {
    //get new cat data
    this.getApiData()
    //Update the success to true after succesful creation of cat
    this.setState({newCatSuccess: true})
  })
}

  render() {
    return (
      <div>
	<Header />
	 <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cats" exact render={(props) => <Cats cats={this.state.cats}/>} />
        //Hand in create new cat api call with form data
        <Route path="/newcat" exact render={(props) => <NewCat onSubmit={this.handleNewCat} success={this.state.newCatSuccess}/>} />
        <Route component={PageNotFound}/>
	    </Switch>
    </Router>
      </div>
    )
  }
}

export default App
