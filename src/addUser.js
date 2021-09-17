import { Form ,Button} from 'react-bootstrap';
import {Link} from "react-router-dom"


const AddUser = () => {
    return (
        <div className="container">
     <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Name" />
    <Form.Text className="text-muted">
      We'll never share your Name with anyone else.
    </Form.Text>
  </Form.Group>
  <Button size="sm"  variant="primary" type="submit">Submit</Button>
<Link to="/" className="btn btn-danger ml-2"> cancel </Link>
</Form>
        </div>
    )
}

export default AddUser