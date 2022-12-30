import React, { useState, useEffect, useRef } from 'react';
import { Col, Row, Container, Card, Spinner } from 'react-bootstrap';
import axios from 'axios'
import './Pagination.css'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import './Pagination.css';

// Component
const TableData = React.lazy(() => import('./TableData'));
const UniverPagination = React.lazy(() => import('./UniverPagination'));
const Rowperpage = React.lazy(() => import('./RowPerpage'));
const SearchFilter = React.lazy(() => import('./SearchFilter'));
const AddUniversity = React.lazy(() => import('./AddUniversity'));
const TableListing = React.lazy(() => import('./TableListing'));

const ViewResult = () => {
  //initial variables
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("")
  const [filteredResults, setFilteredResults] = useState([]);
  const location = useLocation();

  const [currentPage, setCurrentpage] = useState(1)
  const [perPage, setPerpage] = useState(8)

  const [pageLimit] = useState(3)
  const [maxPage, setMaxpage] = useState(3)
  const [minPage, setMinpage] = useState(0)
  const inputSearch = useRef(null)

  const lastPage = currentPage * perPage;
  const firstPage = lastPage - perPage;
  const currentItem = data.slice(firstPage, lastPage);

  useEffect(() => {
    //get the api data
    axios.get('http://universities.hipolabs.com/search?country=India')
      .then(res => {
        setData(res.data)
      })
  }, [])

  //pagination
  const univerData = [];
  const univerLen = Math.ceil(data.length / perPage);
  for (var i = 1; i <= univerLen; i++) {
    univerData.push(i)
  }

  const handleClick = (event) => {
    setCurrentpage(Number(event.target.id))
  }

  const pageNumber = univerData.map(number => {
    if (number < maxPage + 1 && number > minPage) {
      return (
        <li key={number} id={number} className={currentPage === number ? "active page-item" : null} onClick={handleClick}>
          {number}
        </li>
      )
    }
  })
  //previous pagination onclick function
  const handleNextbtn = () => {
    setCurrentpage(currentPage + 1)
    if (currentPage + 1 > maxPage) {
      setMaxpage(maxPage + pageLimit);
      setMinpage(minPage + pageLimit)
    }
  }
  //Next pagination onclick function
  const handlePrevbtn = () => {
    setCurrentpage(currentPage - 1)
    if ((currentPage - 1) % pageLimit === 0) {
      setMaxpage(maxPage - pageLimit);
      setMinpage(minPage - pageLimit)
    }
  }
  //search 
  const onSearch = (searchVal) => {
    setSearch(searchVal)
    const filterData = data.slice(firstPage, lastPage).filter((item) => {
      return Object.values(item).join('').toLowerCase().includes(searchVal.toLowerCase())
    })
    setFilteredResults(filterData)
  }
  return (
    <Container>
      {data.length == "" ? (<Spinner animation="border" variant="primary" />) : (
        <>
          <Row>
            <Col md={12} lg={12}>
              <p >
                <Link to="/" className="backtologin">
                  <i className="fas fa-chevron-left"></i>{" "}
                  Back to Login Page
                </Link>
              </p>
              <h3>Welcome to Login Page</h3>
              <p>
                <span style={{ fontWeight: 'bold', color: 'blue' }}>
                  Email :</span>{' '} {location.state.email} <br />
                <span style={{ fontWeight: 'bold', color: 'blue' }}>
                  Password :</span>{' '}{location.state.password}
              </p>
            </Col>
          </Row>
          <Card>
            <Row>
              <Col className="m-2 p-3 justify-content-space-around" md={6}>
                <SearchFilter onSearch={onSearch} inputSearch={inputSearch} />
              </Col>
            </Row>
            <Row>
              <Col className="mx-2">
                <TableData data={currentItem} perPage={perPage} currentPage={currentPage} filteredResults={filteredResults} search={search} />
              </Col>
            </Row>
            <Row>
              <Col md={7}>
                <UniverPagination pageNumber={pageNumber} handlePrevbtn={handlePrevbtn} handleNextbtn={handleNextbtn} />
              </Col>
              <Col md={5}>
                <Rowperpage setPerpage={setPerpage} />
              </Col>
            </Row>
            {/*new listing adding and editing */}
            <Row className="m-1 p-2 text-end ">
              <Col md={12} className="m-1 p-2">
                <AddUniversity />
              </Col>
            </Row>
            <Row>
              <Col className="mx-2">
                <TableListing />
              </Col>
            </Row>
          </Card>
        </>
      )}
    </Container>
  );
};
export default ViewResult;