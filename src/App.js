import React,{Suspense,lazy} from 'react';
import { Routes, Route } from "react-router-dom";

//component
import MainPage from './component/MainPage';
import ViewResult from './component/ViewResult';
import {Spinner} from 'react-bootstrap';

const App =()=>{
  return(
    <Suspense fallback={<div className="text-center align-items-center"><Spinner animation="border" variant="primary" /></div>}>
      {/* <Route path='/' element={<Topbar />} /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/success" element={<ViewResult/>} />
      </Routes> 
    </Suspense>   
  );
}
export default App;