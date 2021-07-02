import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input  } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class ApartmentNew extends Component {
  constructor(props) {
  super(props)
  this.state = {
    form:{
      street: "",
      city: "",
      state: "",
      manager: "",
      manager_email: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      pets: "",
      user_id: this.props.current_user.id
    },
    success: false
  }
  }
  handleChange = (e) => {
  let { form } = this.state
  form[e.target.name] = e.target.value
  this.setState({ form: form })
}

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createNewApartment(this.state.form)
    this.setState({ success: true})
  }
  render() {
    return(
      <>
      <h3>Create a New Listing</h3>
      <Form id ="form">
          <FormGroup>
            <Label for = "name">Street</Label>
            <Input type="text" name="street" onChange = {this.handleChange} value = {this.state.form.street}/>          
          </FormGroup>
          <FormGroup>
            <Label for = "city">City</Label>
            <Input type="text" name="city"onChange = {this.handleChange} value = {this.state.form.city} />          
          </FormGroup>
          <FormGroup>
            <Label for = "state">State</Label>
            <Input type="text" name="state" onChange = {this.handleChange} value = {this.state.form.state}/>          
          </FormGroup>
          <FormGroup>
            <Label for = "price">Price</Label>
            <Input type="text" name="price" onChange = {this.handleChange} value = {this.state.form.price}/>          
          </FormGroup>
          <FormGroup>
            <Label for = "bedrooms">Bedrooms</Label>
            <Input type="number" name="bedrooms" onChange = {this.handleChange} value = {this.state.form.bedrooms}/>          
          </FormGroup>
          <FormGroup>
            <Label for = "bathrooms">Bathrooms</Label>
            <Input type="text" name="bathrooms" onChange = {this.handleChange} value = {this.state.form.bathrooms}/>          
          </FormGroup>
          <FormGroup>
            <Label for = "pets">Pets Allowed?</Label>
            <Input type="text" name="pets" onChange = {this.handleChange} value = {this.state.form.pets}/>          
          </FormGroup>
          <FormGroup>
            <Label for = "manager">Manager Name</Label>
            <Input type="text" name="manager" onChange = {this.handleChange} value = {this.state.form.manager}/>          
          </FormGroup>
          <FormGroup>
            <Label for = "manager_email">Manager Email</Label>
            <Input type="text" name="manager_email" onChange = {this.handleChange} value = {this.state.form.manager_email}/>          
          </FormGroup>
            <br />
            <Button 
            id ="new-button"
            name="submit"
            color="success"
            onClick={this.handleSubmit}>
              Create a New Apartment Listing
            </Button>
        </Form>
        {this.state.success && <Redirect to = "/apartmentindex" />}
      </>
    )
  }
}

export default ApartmentNew