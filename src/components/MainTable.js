import React from 'react'
import tableData from '../data/tableData'
import { Table } from 'react-bootstrap';
function MainTable(props) {
    return (
        <div>
            <Table responsive striped bordered hover variant="dark" >
  <thead>
    <tr>
      <th>State/UT</th>
      <th>Confirmed</th>
      <th>Active</th>
      <th>Recovered</th>
      <th>Deceased</th>
      <th>Tested</th>
      <th>Vaccine Doses Administrated</th>
      <th>Population</th>
    </tr>
  </thead>
  <tbody>
 { tableData.map(function mapping(item){
    return(
      <tr>
      <td>{item.state}</td>
      <td>{item.confirmed}</td>
      <td>{item.active}</td>
      <td>{item.recovered}</td>
      <td>{item.deceased}</td>
      <td>{item.tested}</td>
      <td>{item.doses}</td>
      <td>{item.population}</td>
    </tr>
  )
  })}
    
  </tbody>
</Table>
        </div>
    )
}

export default MainTable
