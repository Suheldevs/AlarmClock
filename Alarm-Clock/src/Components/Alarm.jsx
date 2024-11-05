import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form, Card } from 'react-bootstrap';
import Footbar from './Footbar';
import {FaPlus } from 'react-icons/fa';
import { FaEllipsisVertical } from 'react-icons/fa6';

function Alarm() {
  const [alarms, setAlarms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [alarmTime, setAlarmTime] = useState("");
  const [alarmTitle, setAlarmTitle] = useState("");

  // Function to open modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Function to handle form submission in the modal
  const addAlarm = () => {
    const newAlarm = { id: Date.now(), time: alarmTime, title: alarmTitle };
    setAlarms([...alarms, newAlarm]);
    setAlarmTime("");
    setAlarmTitle("");
    closeModal(); // Close the modal after adding the alarm
  };

  return (
    <Container fluid>
      <Row>
        <Col lg={4} sm={0}></Col>
        <Col lg={4} sm={12} className='p-0 m-0 main'>
          <Container>
            <Row>
              <div className='alarm-container text-light'>
                <div className='head'>
                  <div className='h2 mb-0 mt-4 '>Alarm</div>
                  <div className='text-secondary'>All alarms turned off</div>
                </div>
                <div className='mt-2'>
                <FaEllipsisVertical />
                </div>
              </div>
            </Row>
            <hr/>
            <Row>
              <div className="alarm-card-container mt-0">
                {alarms.map((alarm) => (
                  <Card key={alarm.id} className="alarm-card text-bg-dark p-0">
                    <Card.Body>
                      <div className='d-flex justify-content-between'>
                      <Card.Title>{alarm.time}</Card.Title>
                      <Form.Check type="switch" id="vibrate-switch" className='d-inline pt-2 fs-5'/>
                      </div>
                      <Card.Text className='font-sm'>Ring once</Card.Text>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Row>

            <Container>
              <Row>
                <Col lg={12}>
                  <Modal show={showModal} onHide={closeModal}  centered>
                    <Modal.Header closeButton>
                      <Modal.Title className="text-center w-100">New Alarm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p className="text-center">Ring in 23 hours 59 minutes</p>
                      <Form>
                        {/* Time Select */}
                        <Form.Group controlId="alarmTime" className="text-center mb-3">
                          <Form.Label>Select Time</Form.Label>
                          <Form.Control
                            type="time"
                            value={alarmTime}
                            onChange={(e) => setAlarmTime(e.target.value)}
                            style={{ textAlign: 'center' }}
                          />
                        </Form.Group>

                        {/* Repeat Options */}
                        <div className="d-flex justify-content-around my-3">
                          <Button variant="outline-primary">Ring Once</Button>
                          <Button variant="outline-secondary">Workdays</Button>
                          <Button variant="outline-secondary">Custom</Button>
                        </div>

                        {/* Alarm Name */}
                        <Form.Group controlId="alarmTitle" className="mb-3">
                          <Form.Label>Alarm Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={alarmTitle}
                            onChange={(e) => setAlarmTitle(e.target.value)}
                            placeholder="Enter alarm title"
                          />
                        </Form.Group>

                        {/* Ringtone, Vibrate, Snooze */}
                        <Form.Group className="mb-3">
                          <Form.Label>Ringtone</Form.Label>
                          <Form.Control as="select">
                            <option>Delight</option>
                            <option>Chime</option>
                            <option>Radar</option>
                          </Form.Control>
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-between align-items-center mb-3">
                          <Form.Label className="m-0">Vibrate</Form.Label>
                          <Form.Check type="switch" id="vibrate-switch" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Snooze</Form.Label>
                          <Form.Control as="select">
                            <option>5 minutes, 3 times</option>
                            <option>10 minutes, 2 times</option>
                            <option>None</option>
                          </Form.Control>
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-between">
                      <Button variant="outline-danger" onClick={closeModal}>
                        Cancel
                      </Button>
                      <Button variant="primary" onClick={addAlarm}>
                        Done
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Col>
              </Row>
            </Container>

            <div className='add-alarm-btn'>
            <Button onClick={openModal} variant="primary" className="mb-3 fs-4 rounded-circle">
  <FaPlus className='text-center mb-2' />
</Button>
            </div>
            <Row>
              <Footbar/>
              </Row>
          </Container>
        </Col>
        <Col lg={4} sm={0}></Col>
      </Row>
    </Container>
  );
}

export default Alarm;
