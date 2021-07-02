import React, { Component } from 'react'
import { Card, CardTitle, Col, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class ApartmentShow extends Component {
  render() {
    let { apartment } = this.props;
    return(
      <>
      <h3>Apartment Info</h3>
      <Col sm="6">
        <Card body>
          <CardTitle>Information on apartment at address: { apartment.street }</CardTitle>
            <CardText>Apartment located in { apartment.city }, { apartment.state }. Rent is { apartment.price }. The apartment has { apartment.bedrooms } bedrooms and { apartment.bathrooms } bathrooms.  Pets allowed? { apartment.pets }. For more information please contact { apartment.manager } at { apartment.manager_email }. </CardText>
        </Card>
      </Col>
      <NavLink to="/apartmentindex">
        <Button onClick={ () => this.props.deleteApartment(apartment.id)} color="danger" >Delete Apartment Listing</Button>
      </NavLink>  
      <NavLink to={`/apartmentedit/${apartment.id}`}>
        <Button onClick={ () => this.props.updateApartment(apartment.id)} color="success" >Edit Apartment Listing</Button>
      </NavLink> 
      </>
    )
  }
}

export default ApartmentShow