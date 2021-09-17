import React from 'react'
import { Form ,Button} from 'react-bootstrap';
import {Link} from "react-router-dom"

export const EditUser = () => {
    return (
        <div className="container">
        <Form>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Name</Form.Label>
       <Form.Control type="text" placeholder="Edit Name" />
       <Form.Text className="text-muted">
       Edit your Name 
       </Form.Text>
     </Form.Group>
     <Button size="sm"  variant="primary" type="submit">Submit</Button>
   <Link to="/" className="btn btn-danger ml-2"> cancel </Link>
   </Form>
           </div>
    )
}
