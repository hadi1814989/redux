import React from 'react'
import"./price.css"
import { useSelector } from 'react-redux'
import { Col, Container, Row } from 'react-bootstrap'

const Price = () => {
  let data = useSelector((state) => state.product.value)
  let data1 = useSelector((state) => state.product1.value)
  let data2 = useSelector((state) => state.product2.value)
  return (
   <>
  <Container>
    <Row>
        <Col lg={4}>
        <h4 className='price'>Price :$ &nbsp;{data * 10}</h4>
        </Col>
        <Col lg={4}>
        <h4 className='price'>Price :$ &nbsp;{data1 * 5}</h4>
        </Col>
        <Col lg={4}>
        <h4 className='price'>Price :$ &nbsp;{data2 * 15}</h4>
        </Col>
    </Row>
  </Container>
   </>
  )
}

export default Price