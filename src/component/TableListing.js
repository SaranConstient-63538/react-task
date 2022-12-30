import React,{ useState } from 'react';
import {Table, Button, Modal, Container,Row,Col,Form} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { editUniverAction } from '../redux/action';
import {useForm} from 'react-hook-form';

const TableListing =()=>{
  let [id,setId] = useState('')
  const state =useSelector(state => state.form)
  const dummy = state.filter((item)=> item.id === parseInt(id) && item)
  
  const {register,handleSubmit,setValue} =useForm({
    countrycode:'',
    countryname:'',
    domains: '',
    univername :'',
    statename :'',
    webpage :'',
  })
  
  const [show, setShow]=useState(false)
  const dispatch =useDispatch()
  
  const onEdit =(data)=>{
    setShow(false);
    const editData ={
      id: id.id,
      countrycode:data.countrycode,
      countryname:data.countryname,
      domains:data.domains,
      univername:data.univername,
      statename:data.statename,
      webpage:data.webpage,
    }
    dispatch(editUniverAction(editData))    
  }
  return(
    <>
      <Table bordered hover striped variant="success">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>State</th>
            <th>Country</th>
            <th>Web Pages</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item,id)=>{
            return(
              <tr key={id}>
                <td>{id+1}</td>
                <td>{item.univername}</td>
                <td>{item.statename}</td>
                <td>{item.countryname}</td>                
                <td>{item.webpage}</td>
                <td className="text-center">
                  <Button variant="primary" className="text-center" onClick={()=>{
                    setShow(true)
                    console.log(state)
                    setId(state[id])
                    if(id){
                      setValue('countrycode', state[id].countrycode );
                      setValue('countryname', state[id].countryname);
                      setValue('domains', state[id].domains );
                      setValue('univername', state[id].univername);
                      setValue('statename', state[id].statename );
                      setValue('webpage', state[id].webpage );
                    }
                  }}>
                      <i className="fas fa-edit p-1"></i>
                  </Button>  
                </td>   
              </tr>  
            )
          })}
        </tbody>
      </Table>  
      <Modal size="lg" show={show} onHide={()=> setShow(false)}>
        <Modal.Header closeButton >
          <Modal.Title className="text-primary fw-600">Edit University</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>                
                <Form onSubmit={handleSubmit(onEdit)}>
                  <Form.Label>Country Code:</Form.Label>
                  <Form.Control 
                    type="text" 
                    {...register('countrycode',{required:true})}  
                  />
                  <Form.Label>Country Name:</Form.Label>
                  <Form.Control 
                    type="text"
                    {...register('countryname',{required:true})} 
                  />
                  <Form.Label>Domain Name:</Form.Label>
                  <Form.Control 
                    type="text" 
                    {...register('domains',{required:true})} 
                  />
                  <Form.Label>University Name:</Form.Label>
                  <Form.Control 
                    type="text" 
                    {...register('univername',{required:true})} 
                  />
                  <Form.Label>State:</Form.Label>
                  <Form.Control 
                    type="text" 
                    {...register('statename',{required:true})}
                  />
                  <Form.Label>Web Pages:</Form.Label>
                  <Form.Control 
                    type="text" 
                    {...register('webpage',{required:true})} 
                  />
                  <Col className="mt-2  text-end">
                    <Button variant="primary" type="submit">
                      Save 
                    </Button>
                  </Col>
                </Form>
              </Col>
            </Row>
          </Container>                    
        </Modal.Body>          
      </Modal>
    </>    
  )
}
export default TableListing;