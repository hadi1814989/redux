import React from 'react'
import"./about.css"
import { useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
   let data = useSelector((state)=> state.product.value)
   let data1 = useSelector((state)=> state.product1.value)
   let data2 = useSelector((state)=> state.product2.value)
  return (
   <Container>
    <Row>
    <Col lg={4}>
        <div>
        <h3 className='quantity'>Quantity :&nbsp; {data}kg</h3>
        </div>
    </Col>
    <Col lg={4}>
        <div>
        <h3 className='quantity'>Quantity :&nbsp; {data1}kg</h3>
        </div>
    </Col>
    <Col lg={4}>
        <div>
        <h3 className='quantity'>Quantity :&nbsp; {data2}kg</h3>
        </div>
    </Col>
    </Row>
   </Container>
  )
}

export default About