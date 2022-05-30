import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form, Col, Row, Dropdown } from "react-bootstrap";
import axios from "axios";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const [men, setMen] = useState([]);
  const [women, setWomen] = useState([]);
  const [mixed, setMixed] = useState([]);

  const [res, setRes] = useState({
    categories: {
      Mens: men,
      Womens: women,
      Mixed: mixed,
    },
    news: {},
    notableStars: [],
    rulesnformats: {
      rules: [
        {
          heading: "",
          info: "rule 1",
        },
        {
          heading: "",
          info: ["rule 2", "rule 3"],
        },
      ],
      format: [
        {
          heading: "POINTS",
          info: ["format 1", "format 2"],
        },
      ],
      specifications: "",
      changes:
        "In these competitions, men play up to five sets and women play as many as three. At Wimbledon later this summer, the players may have to play a little longer. The new rules call for a first-to-seven, win by two points tiebreaker, if players are tied at 12 games in the last set. Many players support the new rules.",
    },
  });
  // const [country,setCountry] = useState({})
  const [data, setData] = useState({
    sports: [],
    country: [],
    // star: [],
  });
  const [star,setStar] = useState([])
  const [seletedSport, setSelectedSport] = useState({
    name: "Select Sport",
    id: "",
  });
  const [selectedStar, setSelectedStar] = useState({
    name: "Select Star",
    id: "",
  });
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Select Country",
    id: "",
  });

  async function getData() {
    try {
      var config = {
        method: "get",
        url: `https://127.0.0.1:5000/kb/all-sports`,
      };
      const response = await axios(config);
      if (response.data) {
        // console.log(JSON.stringify(response.data));
        setData({
          ...data,
          star: response.data,
        });
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  async function getCountry() {
    try {
      var config = {
        method: "get",
        url: `https://127.0.0.1:5000/kb/all-countries`,
      };
      const response = await axios(config);
      if (response.data) {
        // console.log(response.data);
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
      alert(
        "There was a problem fetching countries details, please refresh or try again later"
      );
    }
  }
  async function getStar() {
    try {
      var config = {
        method: "get",
        url: `https://127.0.0.1:5000/kb/all-notable-stars`,
      };
      const response = await axios(config);
      if (response.data) {
        // console.log("response: ",response.data);
        // console.log(JSON.stringify(response.data));
        setStar(response.data);
        
        // console.log("country: ",country)
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      alert(
        "There was a problem fetching star details, please refresh or try again later"
      );
    }
  }
  useEffect(() => {
    // getData();
    getCountry();
    getStar();
    
  }, []);
  
  async function handleAddSport() {
    await setRes({
      ...res,
      calender: calendarField,
    });
    console.log(res);
    try {
      setLoading(true);
      var config = {
        method: "post",
        url: "https://127.0.0.1:5000/kb/admin/add-sports-data",
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
        // console.log(response);
        alert("Your response has been saved!");
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
  const [rulesField, setRulesField] = useState([
    {
      id: 1,
      rule: "",
    },
  ]);

  const handleSportsSelect = (e) => {
    var i = e.split(",");
    console.log(i);
    var id = i[0];
    var name = i[1];
    console.log("id: ", id, "name: ", name);
    setSelectedSport({
      name: name,
      id: id,
    });
    setRes({
      ...res,
      sportName: name,
    });
    console.log(res);
  };
  const handleRuleInputChange = (i, e) => {
    const values = [...rulesField];
    values[i][e.target.name] = e.target.value;
    setRulesField(values);
  };
  const handleRuleAdd = (id) => {
    setRulesField([...rulesField, { id: id + 2, rules: "" }]);
  };

  const handleRuleMinus = (i) => {
    const values = [...rulesField];
    values.splice(i, 1);
    setRulesField([...values]);
  };
  const [calendarField, setCalendarField] = useState([
    {
      // id: 1,
      event: "",
      time: "",
    },
  ]);
  const handleCalendarEventInputChange = (i, e) => {
    const values = [...calendarField];
    values[i][e.target.name] = e.target.value;
    setCalendarField(values);
    console.log(calendarField);
  };
  const handleCalendarTimeInputChange = (i, e) => {
    const values = [...calendarField];
    values[i][e.target.name] = e.target.value;
    setCalendarField(values);
    console.log(calendarField);
  };
  const handleCalendarAdd = (id) => {
    setCalendarField([...calendarField, { event: "", time: "" }]);
    console.log(calendarField);
  };

  const handleCalendarMinus = (i) => {
    const values = [...calendarField];
    values.splice(i, 1);
    setCalendarField([...values]);
    console.log(calendarField);
  };

  const [formatField, setFormatField] = useState([
    {
      id: 1,
      format: "",
    },
  ]);

  const handleFormatInputChange = (i, e) => {
    const values = [...formatField];
    values[i][e.target.name] = e.target.value;
    setFormatField(values);
  };
  const handleFormatAdd = (id) => {
    setFormatField([...formatField, { id: id + 2, format: "" }]);
  };

  const handleFormatMinus = (i) => {
    const values = [...formatField];
    values.splice(i, 1);
    setFormatField([...values]);
  };
  
  // useEffect(()=>{
  //   console.log(star.length)
  // },[data])
  return (
    <>
    {
      star.length > 0 && data.country.length > 0 ?
      <div>
      <div style={{ textAlign: "center", margin: "2rem 0 2rem 0" }}>
        <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Add Sport Detail</p>
      </div>
      <Container>
        <Form autoComplete="off">
          <Form.Group className="mb-4">
            <Form.Label>Sports Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => {
                setRes({
                  ...res,
                  sportName: e.target.value,
                });
                // console.log(res);
              }}
            />
            {/* 
            <Dropdown onSelect={(evt) => handleSportsSelect(evt)}>
              <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{}}>
                {seletedSport.name}
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  height: "500px",
                  overflowX: "hidden",
                  overflowY: "scroll",
                }}
              >
                {data.sports.map((items, key) => {
                  return (
                    <Dropdown.Item
                      key={key}
                      eventKey={[items.sport_id, items.sportname]}
                    >
                      {items.sportname}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown> */}
            <Form.Text className="text-muted">Enter the Sports Name</Form.Text>
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Sports History</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                setRes({
                  ...res,
                  history: e.target.value,
                });
                // console.log(res);
              }}
            />
            <Form.Text className="text-muted">
              Enter the information about the sports history
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>World Association</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                setRes({
                  ...res,
                  worldAssonFounded: e.target.value,
                });
                // console.log(res);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>India Association</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                setRes({
                  ...res,
                  indianAssonFounded: e.target.value,
                });
                // console.log(res);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label>Included in Olympics</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => {
                setRes({
                  ...res,
                  includedInOlym: e.target.value,
                });
                // console.log(res);
              }}
            />
            <Form.Text className="text-muted">
              Enter the year when the sports got included in the Olympics
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Notable Stars</Form.Label>
            {/* <Form.Control as="textarea" rows={3} /> */}
            <Dropdown
              onSelect={(evt) => {
                var i = evt.split(",");
                // console.log(i);
                var id = i[0];
                var name = i[1];
                // console.log("id: ", id, "name: ", name);
                setSelectedStar({
                  name: name,
                  id: id,
                });
                setRes({
                  ...res,
                  notableStars: [id],
                });
                // console.log(res);
              }}
            >
              <Dropdown.Toggle variant="primary" id="dropdown-basic" style={{}}>
                {selectedStar.name}
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  height: "500px",
                  overflowX: "hidden",
                  overflowY: "scroll",
                }}
              >
                {star.map((items, key) => {
                  // console.log("items: ", items);
                  return (
                    <Dropdown.Item
                      key={key}
                      eventKey={[items.star_id, items.star_name]}
                    >
                      {items.star_name}
                    </Dropdown.Item>
                  );
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Events</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                var m = e.target.value.split(",");
                setRes({
                  ...res,
                  events: m,
                });
                // console.log(res);
              }}
            />
            <Form.Text className="text-muted">
              Enter the events name of the sport
            </Form.Text>
          </Form.Group>

          <Form.Label>Calendar</Form.Label>
          <Form.Group as={Col} controlId="formGrid">
            {calendarField.map((field, i) => (
              <div key={field.id}>
                <Row className="mb-3">
                  <Col md>
                    <Form.Text className="text-muted">Event Name</Form.Text>
                    <Form.Control
                      type="text"
                      name="event"
                      value={calendarField.event}
                      onChange={(e) => handleCalendarEventInputChange(i, e)}
                    />
                  </Col>
                  <Col md>
                    <Form.Text className="text-muted">Event Time</Form.Text>
                    <Form.Control
                      type="text"
                      name="time"
                      value={calendarField.time}
                      onChange={(e) => handleCalendarTimeInputChange(i, e)}
                    />
                  </Col>
                  <Col md>
                    <Button
                      variant="success"
                      onClick={() => handleCalendarAdd(i)}
                    >
                      <i className="fas fa-plus"></i>
                    </Button>{" "}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button
                      variant="danger"
                      disabled={i === 0}
                      onClick={() => handleCalendarMinus(i)}
                    >
                      <i className="fas fa-minus"></i>
                    </Button>
                  </Col>
                </Row>
              </div>
            ))}
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Equipments</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => {
                var m = e.target.value.split(",");
                // setWomen(m);
                setRes({
                  ...res,
                  equipments: m,
                });
                // console.log(res);
              }}
            />
            <Form.Text className="text-muted">
              Enter the required equipments needed for the sport
            </Form.Text>
          </Form.Group>
          <Form.Label>Rules</Form.Label>
          <Form.Group as={Col} controlId="formGrid">
            {rulesField.map((field, i) => (
              <div key={field.id}>
                <Row className="mb-3">
                  <Col md>
                    <Form.Control
                      type="text"
                      name="rule"
                      value={rulesField.rules}
                      onChange={(e) => handleRuleInputChange(i, e)}
                    />
                  </Col>
                  <Col md>
                    <Button variant="success" onClick={() => handleRuleAdd(i)}>
                      <i className="fas fa-plus"></i>
                    </Button>{" "}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button
                      variant="danger"
                      disabled={field.id === 1}
                      onClick={() => handleRuleMinus(i)}
                    >
                      <i className="fas fa-minus"></i>
                    </Button>
                  </Col>
                </Row>
              </div>
            ))}
          </Form.Group>

          <Form.Label>Format</Form.Label>
          <Form.Group as={Col} controlId="formGrid">
            {formatField.map((field, i) => (
              <div key={field.id}>
                <Row className="mb-3">
                  <Col md>
                    <Form.Control
                      type="text"
                      name="format"
                      value={rulesField.format}
                      onChange={(e) => handleFormatInputChange(i, e)}
                    />
                  </Col>
                  <Col md>
                    <Button
                      variant="success"
                      onClick={() => handleFormatAdd(i)}
                    >
                      <i className="fas fa-plus"></i>
                    </Button>{" "}
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <Button
                      variant="danger"
                      disabled={field.id === 1}
                      onClick={() => handleFormatMinus(i)}
                    >
                      <i className="fas fa-minus"></i>
                    </Button>
                  </Col>
                </Row>
              </div>
            ))}
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-5">
            <Form.Label>Photo</Form.Label>
            <Form.Control type="file" accept=".jpeg,.jpg,.png" />
            <Form.Text className="text-muted">
              Upload the Photo of the sport
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Categories</Form.Label>
            <br></br>
            <Form.Text className="text-muted">Mens</Form.Text>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => {
                var m = e.target.value.split(",");
                setMen(m);

                setRes({
                  ...res,
                  categories: {
                    Mens: men,
                    Womens: women,
                    Mixed: mixed,
                  },
                });
                // console.log(res);
              }}
            />

            <Form.Text className="text-muted">Womens</Form.Text>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => {
                var m = e.target.value.split(",");
                setWomen(m);
                setRes({
                  ...res,
                  categories: {
                    Mens: men,
                    Womens: women,
                    Mixed: mixed,
                  },
                });
                // console.log(res);
              }}
            />

            <Form.Text className="text-muted">Mixed</Form.Text>
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => {
                var m = e.target.value.split(",");
                setMixed(m);
                setRes({
                  ...res,
                  categories: {
                    Mens: men,
                    Womens: women,
                    Mixed: mixed,
                  },
                });
                // console.log(res);
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
                // console.log(res);
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
        </Form>
        <div className="d-grid gap-2 mb-5">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            onClick={handleAddSport}
          >
            {loading ? "Loading..." : "Add Sport"}
          </Button>
        </div>
      </Container>
    </div>
   :
   <p>Loading...</p>
    }
    </>
  );
}
