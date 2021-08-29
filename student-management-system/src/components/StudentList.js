import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import { Container, Table } from 'react-bootstrap';

export default function StudentList() {
  const [studentData, setstudentData] = useState([]);

  useEffect(()=>{
     axios.get('http://localhost:3000/posts')
     .then((response)=>{
        setstudentData(response.data);
        })
     },[])

  return (
    <div>
    <Container>
     <Table striped bordered hover responsive="md">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Class</th>
        <th>Phone</th>
        <th>Email</th>
         <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {
          studentData.map((student,index)=>{
             return(
               <tr key={index}>
               <td>{student.id}</td>
               <td>{student.name}</td>
                <td>{student.class}</td>
               <td>{student.phone}</td>
               <td>{student.email}</td>
               <td></td>
               </tr>
             ) 
          })
        }
    </tbody>
  </Table>
   </Container>
    </div>
  )
}
