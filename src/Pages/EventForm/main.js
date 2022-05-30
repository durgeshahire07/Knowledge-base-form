import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Dropdown, Col, Row } from "react-bootstrap";
import axios from "axios";

export default function EventForm() {
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState({
    records: [],
    sourceLinks: [],
    categories: [],
    sportsIncluded: ["452d12bf-2ca8-485c-856f-fa61918465ed"],
  });
  const [data, setData] = useState({
    country: [],
  });
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Select Country",
    id: "",
  });

  const [popularityField, setPopularityField] = useState([
    {
      name: "",
      text: "",
    },
  ]);
  const handlePopularityNameInputChange = (i, e) => {
    const values = [...popularityField];
    values[i][e.target.name] = e.target.value;
    setPopularityField(values);
    console.log(popularityField);
  };
  const handlePopularityTextInputChange = (i, e) => {
    const values = [...popularityField];
    values[i][e.target.name] = e.target.value;
    setPopularityField(values);
    console.log(popularityField);
  };
  const handlePopularityAdd = (id) => {
    setPopularityField([...popularityField, { name: "", text: "" }]);
    console.log(popularityField);
  };

  const handlePopularityMinus = (i) => {
    const values = [...popularityField];
    values.splice(i, 1);
    setPopularityField([...values]);
    console.log(popularityField);
  };

  async function getCountry() {
    try {
      var config = {
        method: "get",
        url: `https://127.0.0.1:5000/kb/all-countries`,
      };
      const response = await axios(config);
      if (response.data) {
        console.log(response.data);
        // console.log(JSON.stringify(response.data));
        setData({
          ...data,
          country: response.data,
        });
        // console.log("country: ",country)
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    // getData();
    getCountry();
  }, []);

  async function handleAddEvent() {
    setRes({
      ...res,
      popularity: popularityField,
    });
    console.log(res);
    try {
      setLoading(true);
      var config = {
        method: "post",
        url: "https://127.0.0.1:5000/kb/admin/add-event",
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
  return (
    <div>
      <div style={{ textAlign: "center", margin: "2rem 0 2rem 0" }}>
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Add Event Detail</p>
      </div>
      <Container>
        <Form autoComplete="off">
          <Form.Group className="mb-4">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => {
                setRes({
                  ...res,
                  eventName: e.target.value,
                });
                console.log(res);
              }}
            />
            <Form.Text className="text-muted">Enter the Event Name</Form.Text>
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Event History</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                setRes({
                  ...res,
                  eventHistory: e.target.value,
                });
                console.log(res);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Sports included</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              // onChange={(e) => {
              //   var m = e.target.value.split(",");
              //   setRes({
              //     ...res,
              //     sportsIncluded: m,
              //   });
              //   console.log(res);
              // }}
            />
          </Form.Group>
          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Records</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              // onChange={(e) => {
              //   var m = e.target.value.split(",");
              //   setRes({
              //     ...res,
              //     records: m,
              //   });
              //   console.log(res);
              // }}
            />
          </Form.Group>
          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Stars best performance</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                var m = e.target.value.split(",");
                setRes({
                  ...res,
                  starsBestPerformance: m,
                });
                console.log(res);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Nations Participating</Form.Label>
            {/* <Form.Control as="textarea" rows={3} /> */}
            <Dropdown
              onSelect={(evt) => {
                var i = evt.split(",");
                // console.log(i);
                var id = i[0];
                var name = i[1];
                // console.log("id: ", id, "name: ", name);
                setSelectedCountry({
                  name: name,
                  id: id,
                });
                setRes({
                  ...res,
                  coutriesParticipating: [id],
                });
                console.log(res);
              }}
            >
              <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{}}>
                {selectedCountry.name}
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  height: "500px",
                  overflowX: "hidden",
                  overflowY: "scroll",
                }}
              >
                {data.country.map((items, key) => {
                  return (
                    <Dropdown.Item
                      key={key}
                      eventKey={[items.country_id, items.country_name]}
                    >
                      {items.country_name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Rules & Format</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Most Championship wins</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                var m = e.target.value.split(",");
                setRes({
                  ...res,
                  mostChampionshipWins: m,
                });
                console.log(res);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Rules</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Categories</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Label>Event popularity (attendance, viewership)</Form.Label>
          <Form.Group as={Col} controlId="formGrid">
            {popularityField.map((field, i) => (
              <div key={field.id}>
                <Row className="mb-3">
                  <Col md>
                    <Form.Text className="text-muted">Event Name</Form.Text>
                    <Form.Control
                      type="text"
                      name="name"
                      value={popularityField.event}
                      onChange={(e) => handlePopularityNameInputChange(i, e)}
                    />
                  </Col>
                  <Col md>
                    <Form.Text className="text-muted">
                      Event viewership and Year
                    </Form.Text>
                    <Form.Control
                      type="text"
                      name="text"
                      value={popularityField.time}
                      onChange={(e) => handlePopularityTextInputChange(i, e)}
                    />
                  </Col>
                  <Col md>
                    <Button
                      variant="success"
                      onClick={() => handlePopularityAdd(i)}
                    >
                      <i className="fas fa-plus"></i>
                    </Button>{" "}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button
                      variant="danger"
                      disabled={i === 0}
                      onClick={() => handlePopularityMinus(i)}
                    >
                      <i className="fas fa-minus"></i>
                    </Button>
                  </Col>
                </Row>
              </div>
            ))}
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Partners</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                var m = e.target.value.split(",");
                setRes({
                  ...res,
                  partners: m,
                });
                console.log(res);
              }}
            />
          </Form.Group>
        </Form>
        <div className="d-grid gap-2 mb-5">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            onClick={handleAddEvent}
          >
            {loading ? "Loading..." : "Add Event"}
          </Button>
        </div>
      </Container>
    </div>
  );
}
