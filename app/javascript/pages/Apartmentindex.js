import React, { Component } from 'react'
import { Card, CardTitle, Col, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Apartmentindex extends Component {
  render() {
    let { apartment } = this.props 
    return(
      <>
      <h3>Available Apartments</h3>
      <Col>
        { apartment.map(apartment => {
        return (
        <Card body key={ apartment.id }>
          <CardTitle>
            <NavLink to={`/apartmentshow/${apartment.id}`}>
            <h4>{ apartment.street }</h4>
            </NavLink>
          </CardTitle>
        </Card>
        )
        })}
      </Col>
      </>
    )
  }
}

export default Apartmentindex