import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form,} from "react-bootstrap";

export default function EquipmentForm() {
  return (
    <div>
     
    <div style={{ textAlign: "center", margin: "2rem 0 2rem 0" }}>
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Add Equipment Detail</p>
    </div>
    <Container>
      <Form autoComplete="off">
        <Form.Group className="mb-4">
          <Form.Label>Sport Name</Form.Label>
          <Form.Control type="text" placeholder="" />
          <Form.Text className="text-muted">Enter the Sport Name</Form.Text>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Format</Form.Label>
          <Form.Control type="email" placeholder="" />
          <Form.Text className="text-muted">Enter the Country Name</Form.Text>
        </Form.Group>

        <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Events</Form.Label>
          <Form.Control as="textarea" rows={3} />
          
        </Form.Group>
        <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Specifications</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Accesories</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        
        <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Apparels</Form.Label> 
          <Form.Control as="textarea" rows={3} />
        
        </Form.Group>
       
        <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Availablity</Form.Label> 
          <Form.Control as="textarea" rows={3} />
          
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-5">
          <Form.Label>Photo</Form.Label>
          <Form.Control type="file" accept=".jpeg,.jpg,.png" />
          <Form.Text className="text-muted">
            Upload the Photo of the Equipment
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Categories</Form.Label> 
          <Form.Control as="textarea" rows={3} />
         
        </Form.Group>
        <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Footwear</Form.Label> 
          <Form.Control as="textarea" rows={3} />
          
        </Form.Group>
        <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Major Manufactures</Form.Label> 
          <Form.Control as="textarea" rows={3} />
  
        </Form.Group>
       
        
      </Form>
      <div className="d-grid gap-2 mb-5">
        <Button type="submit" variant="primary" size="lg">
          Add Equipment
        </Button>
      </div>
    </Container>
  </div>
  )
}
