import React, {useState} from 'react'
import {Col, Form, Row} from 'react-bootstrap'

const Rowperpage =(props)=>{
    const {setPerpage}=props;
    const [listperPage ] = useState([5,10,15,20])
    const selectedValue =(event)=>{
        console.log(event.target.value)
        setPerpage(event.target.value)
    }
    const list = listperPage.map(item =>{
        return(
            <option value={item} key={item}>{item}</option>
        )
    })
    return(
        <Row>
            <Col sm={5} className="text-end align-items-center py-2">
                <p className='fw-bold text-primary'>Row per page</p>
            </Col>
            <Col sm={3}>
                <Form.Select onChange={selectedValue}>
                    {list}
                </Form.Select>
            </Col>          
        </Row>
    )
}
export default Rowperpage;