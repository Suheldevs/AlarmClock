import React from 'react'
import { CgSandClock } from 'react-icons/cg'
import { FaPlus } from 'react-icons/fa'
import { IoMdAlarm, IoMdStopwatch } from 'react-icons/io'
import { TbWorld } from 'react-icons/tb'
import Footbar from './Footbar'

function Home() {
    return (
        <Container fluid >

            <Row>
                <Col lg={4} sm={0}></Col>
                <Col lg={4} sm={12} className='p-0 m-0 main'>
                    <Footbar/>
                </Col>
                <Col lg={4} sm={0}></Col>
            </Row>
        </Container>
    )
}

export default Home