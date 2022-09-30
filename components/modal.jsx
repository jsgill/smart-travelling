import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";


function MydModalWithGrid(props) {
  const destination_object = {
    destination_1: {
      path: "/images/trip/destination_1.png",
      name: "destination_1",
      title: "Manali",
      selected: false
    },
    destination_2: {
      path: "/images/trip/destination_2.png",
      name: "destination_2",
      title: "Kasol",
      selected: false
    },
    destination_3: {
      path: "/images/trip/destination_3.png",
      name: "destination_3",
      title: "Leh-Ladakh",
      selected: false
    },
    destination_4: {
      path: "/images/trip/destination_6.png",
      name: "destination_4",
      title: "Spiti Valley",
      selected: false
    }

  }
  const [DestinationSelected, setDestinationSelected] = useState(destination_object);
  function setDestinationBorder(key) {
    const NewState = Object.assign({}, DestinationSelected)
    if (!DestinationSelected[key].selected) {
      NewState[key].selected = true;
      props.change(NewState[key].title)
      setDestinationSelected(NewState);
      console.log(DestinationSelected);
    }
    else {
      NewState[key].selected = false;
      props.change(NewState[key].title)
      setDestinationSelected(NewState);
      console.log(DestinationSelected);
    }
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose 1 or more
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            {Object.keys(DestinationSelected).map(key => {
              return (
                <Col key={key} xs={6} md={3}>
                  <Card onClick={() => setDestinationBorder(key)} className={DestinationSelected[key].selected ? "withBorder" : "noBorder"}>
                    <Card.Title className="text-center">{DestinationSelected[key].title}</Card.Title>
                    <Card.Img src={DestinationSelected[key].path} alt="Card image" />
                  </Card>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Card.Title className="text-center">Coming Soon</Card.Title>
            <Col>
              <Card className="noBorder">
                <Card.Title className="text-center">Goa</Card.Title>
                <Card.Img src="/images/trip/destination_4.png" />
              </Card>
            </Col>
            <Col>
              <Card className="noBorder">
                <Card.Title className="text-center">Rajasthan</Card.Title>
                <Card.Img className="card-image" src="/images/trip/destination_5.png" />
              </Card>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}  className={"tripOne_inputone_btn"} variant="success" size="md" >Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid;
