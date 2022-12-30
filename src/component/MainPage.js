import React,{useState,useRef} from 'react';
import loginImg from '../login.png'
import './Pagination.css'
import { Container, Row, Col, Card,Image } from "react-bootstrap";

//Component
const CardTitle = React.lazy(()=> import('./CardTitle'));
const LoginPage = React.lazy(()=> import('./Loginpage'));

const MainPage = (props) => {
  //intial variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState(false); 
  const [passwordErr, setPasswordErr] = useState(false);  

  const emailRef =useRef('');
  const passwordRef =useRef('');


  let validemail = /^[A-Z0-9._%+-]+[A-Z0-9]+@[A-Z0-9.-]+\.[A-Z]{2,3}$/i;



  //onChange function
  const onEmail = (event) => {
    // console.log(emailRef.current.focus());
    setEmail(event.target.value);
    if (!validemail.test(event.target.value)) {
      setEmailErr(!emailErr);
    } else {   
      setEmailErr(emailErr);
    }    
  };
  //onChange function
  const onPassword = (event) => {
    // console.log(passwordRef.current.focus());
    setPassword(event.target.value);
    if ( event.target.value.length < 8) {
      setPasswordErr(!passwordErr);
    }else {
      setPasswordErr(passwordErr);
    }    
  };  
  return (  
    <Container >      
      <Row className="justify-content-center align-items-center justify-content-around">
        <Col className="p-3" md={4} sm={6}>
          <Card className="w-100 card-radius">
            <Card.Body>
              <Card.Title className="mb-2 mt-2 ">
                <CardTitle />
              </Card.Title>
              <Card.Text className="text-start">
                <LoginPage
                  email={email}
                  password={password}
                  onEmail={onEmail}
                  emailErr={emailErr}
                  passwordErr={passwordErr}
                  onPassword={onPassword}     
                  setEmailErr={setEmailErr}
                  setPasswordErr={setPasswordErr}      
                  emailRef={emailRef}
                  passwordRef={passwordRef}
                />
              </Card.Text>
            </Card.Body>                
          </Card>
        </Col>
        <Col className="p-3 text-center align-items-center" sm={1}>
          <p className="incline-line"></p>
        </Col> 
        <Col className="p-3" sm={5}>
          <Image fluid  src={loginImg}/>
        </Col>  
      </Row>
    </Container>  
  );
}
export default MainPage;