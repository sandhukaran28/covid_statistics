import React from 'react'
import { NavItem, Table } from 'react-bootstrap';
import vaccineData from '../data/vaccineData'
import '../components/VaccineTable.css'

function VaccineTable(props) {
    return (
        <div className="vaccinetable">
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>State/UT</th>
      <th>1st Dose</th>
      <th>2nd Dose</th>
      <th>Total Doses</th>
    </tr>
  </thead>
  <tbody>
 { vaccineData.map(function mapping(item){
    return(
      <tr>
      <td>{item.state}</td>
      <td>{item.dose1}</td>
      <td>{item.dose2}</td>
      <td>{item.tdoses}</td>
    </tr>
  )
  })}
    
  </tbody>
</Table>
        </div>
    )
}

export default VaccineTable
