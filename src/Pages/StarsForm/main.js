import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form,Col, Row } from "react-bootstrap";
import axios from 'axios';

export default function StarsForm() {

  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({
    sportID: "dbef0791-ff23-4d0d-9837-905f342252ea",
    isIndian: true,
    news: [],
    eventIDs: [],
    awardIDs: [],
  });
  
  async function handleAddStar() {
    setRes({
      ...res,
      statistics: statisticsField,
    });
    console.log(res);
    try {
      setLoading(true);
      var config = {
        method: "post",
        url: "https://127.0.0.1:5000/kb/admin/add-notable-star",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
        // withCredentials: true,
        data: res,
        withCredentials: true,
      };
      const response = await axios(config);
      // console.log(JSON.stringify(response.data));
      if (response.status === 200) {
        console.log(response);
        alert("Your response has been saved!")
        setLoading(false);
        window.location.reload();
      } else {
        alert("Something went wrong");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      alert("Error");
    }
  }
  
  const [statisticsField, setStatisticsField] = useState([
    {
      type: "",
      value: 0,
    },
  ]);
  const handleStatisticsTypeInputChange = (i, e) => {
    const values = [...statisticsField];
    values[i][e.target.name] = e.target.value;
    setStatisticsField(values);
    console.log(statisticsField);
  };
  const handleStatisticsValueInputChange = (i, e) => {
    const values = [...statisticsField];
    values[i][e.target.name] = e.target.value;
    setStatisticsField(values);
    console.log(statisticsField);
  };
  const handleStatisticsAdd = (id) => {
    setStatisticsField([...statisticsField, { type: "", value: 0 }]);
    console.log(statisticsField);
  };

  const handleStatisticsMinus = (i) => {
    const values = [...statisticsField];
    values.splice(i, 1);
    setStatisticsField([...values]);
    console.log(statisticsField);
  };
  return (
    <div>
     
      <div style={{ textAlign: "center", margin: "2rem 0 2rem 0" }}>
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Add Stars Detail</p>
      </div>
      <Container>
      <Form autoComplete="off">
         <Form.Group className="mb-4">
           <Form.Label>Star Name</Form.Label>
           <Form.Control type="text" placeholder="" onChange={(e) => {
                setRes({
                  ...res,
                  starName: e.target.value,
                });
                console.log(res);
              }}/>
           <Form.Text className="text-muted">Enter the Star Name</Form.Text>
         </Form.Group>

         <Form.Group className="mb-4">
           <Form.Label>Country</Form.Label>
           <Form.Control type="email" placeholder="" />
           <Form.Text className="text-muted">Enter the Country Name</Form.Text>
         </Form.Group>

         <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
           <Form.Label>Claim to fame</Form.Label>
           <Form.Control as="textarea" rows={3} 
           onChange={(e) => {
            var m = e.target.value.split(",");
            setRes({
              ...res,
              claimToFame: m,
            });
            console.log(res);
          }}
           />
           {/* <Form.Text className="text-muted">
             Enter the information about the sports history
           </Form.Text> */}
         </Form.Group>
         <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
           <Form.Label>Record</Form.Label>
           <Form.Control as="textarea" rows={3} onChange={(e) => {
                setRes({
                  ...res,
                  record: e.target.value,
                });
                console.log(res);
              }}/>
           {/* <Form.Text className="text-muted">
             Enter the information about the sports history
           </Form.Text> */}
         </Form.Group>
         <Form.Group className="mb-4">
           <Form.Label>Sporting career</Form.Label>
           <Form.Control type="text" placeholder="" onChange={(e) => {
                setRes({
                  ...res,
                  sportingCareer: e.target.value,
                });
                console.log(res);
              }}/>
         </Form.Group>
         
         <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
           <Form.Label>Participated in events</Form.Label> 
           <Form.Control as="textarea" rows={3} 
          //  onChange={(e) => {
          //   var m = e.target.value.split(",");
          //   setRes({
          //     ...res,
          //     eventIDs: m,
          //   });
          //   console.log(res);
          // }}
           />
           {/* <Form.Text className="text-muted">
             Enter the information about the sports history
           </Form.Text> */}
         </Form.Group>
        
         <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
           <Form.Label>Awards</Form.Label> 
           <Form.Control as="textarea" rows={3} 
          //  onChange={(e) => {
          //   var m = e.target.value.split(",");
          //   setRes({
          //     ...res,
          //     awardIDs: m,
          //   });
          //   console.log(res);
          // }}
           />
           {/* <Form.Text className="text-muted">
             Enter the information about the sports history
           </Form.Text> */}
         </Form.Group>
         <Form.Label>Statistics</Form.Label>
          <Form.Group as={Col} controlId="formGrid">
            {statisticsField.map((field, i) => (
              <div key={field.id}>
                <Row className="mb-3">
                  <Col md>
                    <Form.Text className="text-muted">Statistics Type</Form.Text>
                    <Form.Control
                      type="text"
                      name="type"
                      value={statisticsField.event}
                      onChange={(e) => handleStatisticsTypeInputChange(i, e)}
                    />
                  </Col>
                  <Col md>
                    <Form.Text className="text-muted">
                      Value
                    </Form.Text>
                    <Form.Control
                      type="text"
                      name="value"
                      value={statisticsField.time}
                      onChange={(e) => handleStatisticsValueInputChange(i, e)}
                    />
                  </Col>
                  <Col md>
                    <Button
                      variant="success"
                      onClick={() => handleStatisticsAdd(i)}
                    >
                      <i className="fas fa-plus"></i>
                    </Button>{" "}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button
                      variant="danger"
                      disabled={i === 0}
                      onClick={() => handleStatisticsMinus(i)}
                    >
                      <i className="fas fa-minus"></i>
                    </Button>
                  </Col>
                </Row>
              </div>
            ))}
          </Form.Group>
         <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
           <Form.Label>Recognition</Form.Label> 
           <Form.Control as="textarea" rows={3} 
           onChange={(e) => {
            setRes({
              ...res,
              recognition: e.target.value,
            });
            console.log(res);
          }}
           />
           {/* <Form.Text className="text-muted">
             Enter the information about the sports history
           </Form.Text> */}
         </Form.Group>
         <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
           <Form.Label>Other</Form.Label> 
           <Form.Control as="textarea" rows={3} />
           {/* <Form.Text className="text-muted">
             Enter the information about the sports history
           </Form.Text> */}
         </Form.Group>
         <Form.Group controlId="formFile" className="mb-5">
           <Form.Label>Photo</Form.Label>
           <Form.Control type="file" accept=".jpeg,.jpg,.png" />
           <Form.Text className="text-muted">
             Upload the Photo of the Star
           </Form.Text>
         </Form.Group>
         <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
           <Form.Label>Background/Childhood</Form.Label> 
           <Form.Control as="textarea" rows={3} 
           onChange={(e) => {
            setRes({
              ...res,
              background: e.target.value,
            });
            console.log(res);
          }}
           />
           {/* <Form.Text className="text-muted">
             Enter the information about the sports history
           </Form.Text> */}
         </Form.Group>
       </Form>
        <div className="d-grid gap-2 mb-5">
          <Button type="submit" variant="primary" size="lg" onClick={handleAddStar}>
          {loading ? "Loading..." : "Add Event"}
          </Button>
        </div>
      </Container>
    </div>
  )
}
