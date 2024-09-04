import React, { useState } from 'react'
import "./banner.css"
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slice/productSlice';
import img from "../../assets/Blueberry.jpg"
import img1 from "../../assets/mango.jpg"
import img2 from "../../assets/strawberry.jpg"
import { Col, Container, Row } from 'react-bootstrap';
import { decrement1, increment1 } from '../slice/productSlice1';
import { decrement2, increment2 } from '../slice/productSlice2';

const Banner = () => {
  let dispatch = useDispatch();
  let data1 = useSelector((state) => state.product1.value)
  let data2 = useSelector((state) => state.product2.value)
  let data = useSelector((state) => state.product.value)
  console.log(data);
  
   let handleincrement2 = () => {
    dispatch(increment2())
      }  
   let handleincrement1 = () => {
    dispatch(increment1())
      }  
   let handleincrement = () => {
    dispatch(increment())
      }  
  return (
    <>
    <Container>
        <Row>
            <Col lg={4}>
            <h2></h2>
   <div className="img-div">
   <h3><img className='fruit-img' src={img} alt="" /></h3>
   <div className="pos1">Blueberry</div>
   </div>
    <div className="counter">
    <div className="decrement cus-btn">
    <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
    <div className=''>{data}</div>
    <div className="increment cus-btn">
    <button onClick={handleincrement}>+</button>
    </div>
    </div>
    </Col>
            <Col lg={4}>
            <h2></h2>
    <div className="img-div">
    <h3><img className='fruit-img' src={img1} alt="" /></h3>
    <div className="pos2">Mango</div>
    </div>
    <div className="counter">
    <div className="decrement cus-btn">
    <button onClick={()=> dispatch(decrement1())}>-</button>
    </div>
    <div className=''>{data1}</div>
    <div className="increment cus-btn">
    <button onClick={handleincrement1}>+</button>
    </div>
    </div>
            </Col>
            <Col lg={4}>
            <h2></h2>
  <div className="img-div">
  <h3><img className='fruit-img' src={img2} alt="" /></h3>
  <div className="pos3">Strawberry</div>
  </div>
    <div className="counter">
    <div className="decrement cus-btn">
    <button onClick={()=> dispatch(decrement2())}>-</button>
    </div>
    <div className=''>{data2}</div>
    <div className="increment2 cus-btn">
    <button onClick={handleincrement2}>+</button>
    </div>
    </div>
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Banner