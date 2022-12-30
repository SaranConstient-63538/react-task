import React from 'react';
import {Table} from 'react-bootstrap';

const TableData =(props)=>{
  const {data,filteredResults,search,currentPage,perPage } = props;
  return(
    <Table bordered hover striped variant="dark">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>State</th>
          <th>Country</th>
          <th>Web Pages</th>
        </tr>
      </thead>
      <tbody>
      {search !== "" ? 
        (filteredResults.map((item,index) => {
          return(
            <tr key={index}>
              <td>{(perPage *(currentPage-1))+index + 1}</td>
              <td>{item.name}</td>
              <td>{item['state-province']}</td>
              <td> {item.country}</td>
              <td> 
                <a href={item.web_pages}>{item.web_pages}</a>
              </td>
            </tr>                      
          ) 
        })):
        (data.map((item,index) => {
          return(
            <tr key={index}>
              <td>{(perPage *(currentPage-1))+index + 1}</td>
              <td>{item.name}</td>
              <td>{item['state-province']}</td>
              <td> {item.country}</td>
              <td> 
                <a href={item.web_pages}>{item.web_pages}</a>
              </td>
            </tr>                      
          ) 
        }))
      }
      </tbody>
    </Table>  
  )
}
export default TableData;