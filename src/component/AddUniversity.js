import React, { useState } from 'react';
import './Pagination.css';

//library
import { Button, Modal, Container, Col, Row, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addUniverAction } from '../redux/action';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  id: yup.number(),
  countrycode: yup.string().required(),
  countryname: yup.string().required(),
  domains: yup.string().required(),
  univername: yup.string().required(),
  statename: yup.string().required(),
  webpage: yup.string().required(),
});

const AddUniversity = () => {
  const dispatch = useDispatch();
  const [id] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const state = useSelector((state) => state.form);
  const [show, setShow] = useState(false);

  const onSubmit = (data) => {
    setShow(false);
    const addData = {
      id: state[id].id + 1,
      countrycode: data.countrycode,
      countryname: data.countryname,
      domains: data.domains,
      univername: data.univername,
      statename: data.statename,
      webpage: data.webpage,
    };
    dispatch(addUniverAction(addData));
    localStorage.setItem('Id', id);
    localStorage.setItem('countrycode', data.countrycode);
    localStorage.setItem('countryname', data.countryname);
    localStorage.setItem('domains', data.domains);
    localStorage.setItem('univername', data.univername);
    localStorage.setItem('domains', data.domains);
    localStorage.setItem('univername', data.univername);
  };
  return (
    <>
      <Button
        variant="primary"
        className="addbutton"
        onClick={() => {
          setShow(true);
        }}>
        Add
      </Button>
      <Modal size="lg" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="text-primary fw-600">
            Add University
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Label>Country Code:</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('countrycode', {
                      required: 'Country Code is required',
                    })}
                  />
                  <Form.Text className="errcolor">
                    {errors?.countrycode && (
                      <span>{errors.countrycode.message}</span>
                    )}
                  </Form.Text>
                  <br />
                  <Form.Label>Country Name:</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('countryname', {
                      required: 'Country Name is required',
                    })}
                  />
                  {errors?.countryname && (
                    <Form.Text className="errcolor">
                      {errors.countryname.message}
                    </Form.Text>
                  )}
                  <br />
                  <Form.Label>Domain Name:</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('domains', {
                      required: 'Domain Name is required',
                    })}
                  />
                  {errors?.domains && (
                    <Form.Text className="errcolor">
                      {errors.domains.message}
                    </Form.Text>
                  )}
                  <br />
                  <Form.Label>University Name:</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('univername', {
                      required: 'University Name is required',
                    })}
                  />
                  {errors?.univername && (
                    <Form.Text className="errcolor">
                      {errors.univername.message}
                    </Form.Text>
                  )}
                  <br />
                  <Form.Label>State:</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('statename', {
                      required: 'State Name is required',
                    })}
                  />
                  {errors?.statename && (
                    <Form.Text className="err-color">
                      {errors.statename.message}
                    </Form.Text>
                  )}
                  <br />
                  <Form.Label>Web Pages:</Form.Label>
                  <Form.Control
                    type="text"
                    {...register('webpage', {
                      required: 'Web Pages is required',
                    })}
                  />
                  {errors?.webpage && (
                    <Form.Text className="err-color">
                      {errors.webpage.message}
                    </Form.Text>
                  )}
                  <br />
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
  );
};
export default AddUniversity;
