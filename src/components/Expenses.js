import React from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Chart from "./Chart";

const Expenses = (props) =>{

  let d = new Date();

  const [filterYear, setFilterYear] = useState(d.getFullYear());

  const fxExpense = (anExpense)=>{
  
      return(
        <ExpenseItem expense = {anExpense} key = {anExpense.id}/>
      );
  
  }

  const updateFilterYear = (event) => {
    
    setFilterYear(event.target.value);
  };


  const filteredExpenseArray = [];

  for(let i =0 ; i < props.data.length; i++){
     
    if(props.data[i].date.getFullYear() == filterYear){
      filteredExpenseArray.push(props.data[i]);
    }
  }
 
  return(
    <Container>
      <Row className="mb-3">
        <Col xs= {10} md={10} lg={10}> <Chart yearlyData = {filteredExpenseArray} /></Col>
        <Col> <ExpenseFilter filterYear={filterYear} updateFilterYear = {updateFilterYear} /> </Col>
      </Row>

      <Row>
        <Col> {filteredExpenseArray.map(fxExpense)}</Col>
      </Row>
     
    </Container>
  );

};

export default Expenses;