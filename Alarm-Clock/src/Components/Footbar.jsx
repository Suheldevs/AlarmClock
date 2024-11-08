import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import { CgSandClock } from 'react-icons/cg'
// import { FaPlus } from 'react-icons/fa'
import { IoMdAlarm, IoMdStopwatch } from 'react-icons/io'
import { TbWorld } from 'react-icons/tb'
import { Link } from 'react-router-dom'
function Footbar() {
  return (
    <>
    <div className='footbar bg-dark'>
    
                        {/* <div className="">
                            <div className=''>
                                <FaPlus />
                            </div>
                        </div> */}
                        <div className="d-flex align-items-end justify-content-around icons-container py-1">
                                <Link to='/alarm'  className='text-decoration-none'>
                            <div className='text-center text-light ' >
                                <IoMdAlarm  className="icons "/><br/>
                                <span>Alarm</span>
                            </div>
                                </Link>
                                <Link to='/worldclock' className='text-decoration-none'>
                            <div className='text-center text-secondary '>
                                <TbWorld className="icons " /><br/>
                                <span>World clock</span>
                            </div>
                                </Link>
                                <Link to='/stopwatch' className='text-decoration-none'>
                            <div className='text-center text-secondary' >
                                <IoMdStopwatch className="icons " /><br/>
                                <span>Stopwatch</span>
                            </div>
                                </Link>
                                <Link to='/timer' className='text-decoration-none'>
                            <div className='text-center text-secondary' >
                                <CgSandClock  className="icons "/><br/>
                                <span>Timer</span>
                            </div>
                                </Link>
                        </div>
                    </div>
    </>
  )
}

export default Footbar