import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

function TransactionForm() {
    return (
        <div style={{ display: 'block', 
                      width: 700, 
                      padding: 30 }}>
          <h4>Add New Employee</h4>
          <Form>
          <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" 
                            placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Job</Form.Label>
              <Form.Control type="text" 
                            placeholder="Enter Your Designation" />
            </Form.Group><br></br>
            <Button variant="primary" type="submit">
               Submit
            </Button>
          </Form>
        </div>
      );
}

export default TransactionForm
