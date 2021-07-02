import React, { Component } from 'react'
import mockApts from './mockapartments'
import Header from "./Header"
import Footer from './Footer'
import Home from '../pages/Home'
import AptShow from '../pages/ApartmentShow'
import AptIndex from '../pages/Apartmentindex'
import AptNew from '../pages/ApartmentNew'
import AptEdit from '../pages/Apartmentedit'
import NotFound from '../pages/NotFound'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from "react-router-dom"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }
  componentDidMount(){
    this.aptIndex()
    }
  aptIndex = () => {
    fetch("/apartments")
    .then(response => response.json())
    .then(apartmentArray => this.setState({ apartments: apartmentArray}))
    .catch(errors => console.log("index errors:", errors))
  }
  createNewApartment = (newapartment) => {
    return fetch("/apartments", {
      body: JSON.stringify(newapartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.aptIndex())
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }
  updateApartment = (apartment, id) => {
    fetch(`/apartments/${id}`, {
      body: JSON.stringify(apartment),
      headers: {
      "Content-Type": "application/json"
        },
      method: "PATCH"
        })
      .then(response => response.json())
      .then(payload => this.aptIndex())
      .catch(errors => console.log("update errors:", errors))
      }
  deleteApartment = (id) => {
    fetch(`/apartments/${id}`, {
      headers: {
        "Content-type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.aptIndex())
    .catch(errors => console.log("delete errors:", errors))
    }
  render () {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    
    return (
      <>
      <Router>
      <Header sign_in_route={ sign_in_route } sign_out_route={ sign_out_route }
      logged_in={ logged_in } />
      <div id= "card">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/apartmentshow/:id" render={ (props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return <AptShow apartment={ apartment } deleteApartment={ this.deleteApartment } />
          }} />
          <Route path='/apartmentnew' render = { (props) => <AptNew createNewApartment = { this.createNewApartment } current_user= { current_user }/>} />
          <Route path="/apartmentindex" render={ (props) => <AptIndex apartment={ this.state.apartments } />} />
          <Route exact path={"/apartmentedit/:id"} render={ (props)  => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
              return(
                <AptEdit
                 updateApt={this.updateApt}
                 apartment = { apartment } />
               )}
              }
             />
          <Route component={ NotFound } />
        </Switch>
        </div>
        <Footer />
      </Router>
      </>
    );
  }
}

export default App;
