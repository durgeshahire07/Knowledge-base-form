import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form,} from "react-bootstrap";
export default function RecordForm() {
  return (
    <div>
        <div>
     
     <div style={{ textAlign: "center", margin: "2rem 0 2rem 0" }}>
       <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Add Record Detail</p>
     </div>
     <Container>
     <Form autoComplete="off">
          <Form.Group className="mb-4">
            <Form.Label>Sport Name</Form.Label>
            <Form.Control type="text" placeholder="" />
            <Form.Text className="text-muted">Enter the Sport Name</Form.Text>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Event</Form.Label>
            <Form.Control type="email" placeholder="" />
            <Form.Text className="text-muted">Enter the Country Name</Form.Text>
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Format</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Previous Records</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Stars</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          
          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Categories</Form.Label> 
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
         
         
        </Form>
       
       <div className="d-grid gap-2 mb-5">
         <Button type="submit" variant="primary" size="lg">
           Add Record
         </Button>
       </div>
     </Container>
   </div>
    </div>
  )
}
