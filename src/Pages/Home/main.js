import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Col, Row, Dropdown } from "react-bootstrap";
import axios from "axios";
export default function Home() {
  const [data,setData] = useState({
    email : "",
    password: ""
  })
  const DOMAIN = process.env.REACT_APP_BACKEND_DOMAIN;

  const [loading,setLoading] = useState(false)
  async function handleLogin() {
   console.log(data)
   try {
     setLoading(true);
     var config = {
       method: "post",
       url: `${DOMAIN}/auth/login`,
       headers: {
         "Content-Type": "application/json",
         "Access-Control-Allow-Credentials": true,
       },
       data: data,
       withCredentials: true,
     };
     const response = await axios(config);
     console.log(JSON.stringify(response.data));
     if(response.data.success){
       setLoading(false);
       alert("You are successfully logged in")
     }
    //  if (response.status === 200) {
    //    // console.log(response);
    //    setLoading(false);
    //  } else {
    //    alert("Something went wrong");
    //    setLoading(false);
    //  }
   } catch (error) {
     setLoading(false);
    //  alert("Error");
   }
 }
  return (
    <div>
      <div
        style={{
          margin: 'auto',
          width: '50%',
          // border: '3px solid green',
          padding: 10,
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Login</p>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"  
              onChange={(e) => {
                setData({
                  ...data,
                  email: e.target.value,
                });
                // console.log(res);
              }}/>
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" 
              onChange={(e) => {
                setData({
                  ...data,
                  password: e.target.value,
                });
                // console.log(res);
              }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* <Form.Check type="checkbox" label="Check me out" /> */}
            </Form.Group>
           { 
           loading ? 
           <Button variant="primary" disabled>
          
              Loading...
            </Button>
           :
           <Button variant="primary" onClick={handleLogin} >
          
              Submit
            </Button>}
          </Form>
        </div>
      </div>
    </div>
  );
}
