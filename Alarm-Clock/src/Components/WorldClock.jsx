import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footbar from './Footbar';
import axios from 'axios';

function WorldClock() {
  const [time, setTime] = useState(new Date());
  const [timeZoneData, setTimeZoneData] = useState([]);

  const majorCities = [
    { city: 'New York', timezone: 'America/New_York' },
    { city: 'London', timezone: 'Europe/London' },
    { city: 'Paris', timezone: 'Europe/Paris' },
    { city: 'Dubai', timezone: 'Asia/Dubai' },
    { city: 'Moscow', timezone: 'Europe/Moscow' },
    { city: 'Mumbai', timezone: 'Asia/Kolkata' },
    { city: 'Beijing', timezone: 'Asia/Shanghai' },
    { city: 'Tokyo', timezone: 'Asia/Tokyo' },
    { city: 'Sydney', timezone: 'Australia/Sydney' },
    { city: 'Los Angeles', timezone: 'America/Los_Angeles' },
  ];

  // Throttle requests by adding a delay between each call
  const getTimeZoneData = async () => {
    const data = [];
    for (const city of majorCities) {
      try {
        const response = await axios.get(`https://worldtimeapi.org/api/timezone/${city.timezone}`);
        data.push({
          city: city.city,
          timezone: city.timezone,
          offset: response.data.utc_offset,
          datetime: response.data.datetime,
        });
      } catch (error) {
        console.error(`Error fetching data for ${city.city}:`, error);
      }
    }
    setTimeZoneData(data);
  };

  useEffect(() => {
    getTimeZoneData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col lg={4} sm={0}></Col>
        <Col lg={4} sm={12} className='p-0 m-0 main'>
          <Container>
            <Row>
              <div className='time-container'>
                <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
                  <span style={{ color: 'white' }}>{time.getHours().toString().padStart(2, '0')}:</span>
                  <span style={{ color: '#007AFF' }}>{time.getMinutes().toString().padStart(2, '0')}:</span>
                  <span style={{ color: '#007AFF' }}>{time.getSeconds().toString().padStart(2, '0')}</span>
                </div>
                <div style={{ color: 'gray' }}>
                  <span>India Standard Time | </span><span>{time.toDateString()}</span>
                </div>
              </div>
            </Row>

            <Row className=" city-container" >
              {timeZoneData.length > 0 ? (
                timeZoneData.map((cityData, index) => (
                  <Col lg={12} key={index} className="my-1 mt-2 ">
                    <Card className='bg-dark text-light'>
                      
                        <Card.Body>
                      <div className='d-flex justify-content-between'>
                      <Card.Title>{cityData.city}</Card.Title>
                      <div className='fs-3'>
                        {cityData.utc_datetime}
                      <span >{new Date(cityData.datetime).getHours().toString().padStart(2, '0')}:</span>
                        <span >{new Date(cityData.datetime).getMinutes().toString().padStart(2, '0')}</span>
                        </div>
                      </div>
                      <Card.Text className='fs-6'>Today,{cityData.offset} </Card.Text>
                    </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p className='text-center'>Loading city times...</p>
              )}
            </Row>

            <Row>
              <Footbar />
            </Row>
          </Container>
        </Col>
        <Col lg={4} sm={0}></Col>
      </Row>
    </Container>
  );
}

export default WorldClock;
