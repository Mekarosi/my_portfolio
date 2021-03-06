import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import style from '../contactform/contactform.module.css'
import Alert from 'react-bootstrap/Alert';

export default class form extends Component {
   constructor(){
       super()
        

       this.state = {
           fullName: "",
           email: "",
           address: "",
           phoneNumber: "",
           message: ""

       };

   }

   handleChange = (event) => {
    const value = event.target.value
    const id = event.target.id
    this.setState({ [id]: value });
    console.log(this.state)
    
  }

  handleSubmit = (event) =>{
    //event.preventDefault()
     console.log(this.state)
     axios.post('http://localhost:5000/contactform',this.state)
     .then( (response) => {
       //const data = response.data
       if (response.data.status) {
         alert('Thank you for reaching out')
       }
       else{
         alert('Wrong details')
       }
     })
     .catch( (error) => {
       console.log(error);
     });
   }





    render() {
        return (
            <div className={style.container1}>
                 
                     <h1><strong>Contact Me</strong></h1>

                     {this.state.messagesent && (
           <Alert variant = "success">
             <span>message successfully delivered</span>
           </Alert> )}

                     {this.state.messagefail && (
             <Alert variant = "danger">
               <span>message Unsuccessfully delivered</span>
             </Alert>)} 


                  
            <Form onSubmit= {(e) => {
           e.preventDefault()
           this.handleSubmit()
         }}>
                <Form.Group controlId="fullName">
                    <Form.Label>FullName</Form.Label>
                    <Form.Control  type="text" onChange={this.handleChange} placeholder="fullName" />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text"  onChange={this.handleChange} placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Contact Address</Form.Label>
                    <Form.Control  type="text" onChange={this.handleChange} placeholder="Contact Address" />
                </Form.Group>

                <Form.Group controlId="phoneNumber">
                    <Form.Label>Contact Phone Number</Form.Label>
                    <Form.Control type="number"  onChange={this.handleChange} placeholder="Contact Phone Number" />
                </Form.Group>

                <Form.Group controlId="message">
                    <Form.Label>Send Message</Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={this.handleChange}/>
                </Form.Group>

                 <Button variant="primary" type="submit">
                    Submit
                 </Button><br/>

            </Form><br/>


            </div>
        )
    }
}
