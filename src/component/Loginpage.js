import React from 'react';

//dependency packages
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginAction } from '../redux/action';
import { Form, Button } from 'react-bootstrap';

//component
const ViewResult = React.lazy(() => import('./ViewResult'));

const LoginPage = (props) => {
  const {
    email,
    password,
    emailErr,
    setEmailErr,
    setPasswordErr,
    passwordErr,
    onEmail,
    onPassword,
    emailRef,
    passwordRef,
  } = props;
  const dispatch = useDispatch();
  const state = useSelector((state) => state.login);
  const login = state.filter(
    (item) => item.email === email && item.password === password && item,
  );

  const onSubmit = () => {
    dispatch(loginAction(email, password));
    console.log(emailRef.current.value, passwordRef.current.value);
    if (email && password) {
      setEmailErr(false);
      setPasswordErr(false);
    } else {
      setEmailErr(true);
      setPasswordErr(true);
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3 mt-2">
        <Form.Label className="fw-bold text-primary">E-Mail</Form.Label>
        <Form.Control
          value={email}
          type="email"
          ref={emailRef}
          placeholder="Enter email"
          onChange={onEmail}
        />
        <>
          {!emailErr ? (
            <i className="fas fa-exclamation-circle icon-email-error"></i>
          ) : (
            <i className="fas fa-check-circle icon-email-success"></i>
          )}
        </>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold text-primary">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          ref={passwordRef}
          value={password}
          onChange={onPassword}
          className="position-relative"
        />
        <>
          {!passwordErr ? (
            <i className="fas fa-exclamation-circle icon-password-error"></i>
          ) : (
            <i className="fas fa-check-circle icon-password-success"></i>
          )}
        </>
      </Form.Group>
      <NavLink
        to={login.length === 0 ? '/' : '/success'}
        element={<ViewResult />}
        state={{ email, password }}>
        <Button
          type="button"
          className="btn w-50 m-2 ms-5 text-center fw-bold fs-6 btn-primary"
          onClick={onSubmit}>
          Submit
        </Button>
      </NavLink>
    </Form>
  );
};
export default LoginPage;
