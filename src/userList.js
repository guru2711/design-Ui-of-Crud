import React from 'react'
import { Link } from 'react-router-dom'
import {ListGroup,} from "react-bootstrap"
import Button from '@restart/ui/esm/Button'

export const UserList = () => {
    return (
        <div className="container">
        <ListGroup >
        <ListGroup.Item className="d-flex " horizontal>
            <strong >Cras justo odio
      <Link className="btn btn-primary" to="/edit/1">Edit</Link>
<Button size="sm" className="btn btn-danger ">Delete</Button>
</strong>
       </ListGroup.Item>
      </ListGroup>
    </div>
    )
}

