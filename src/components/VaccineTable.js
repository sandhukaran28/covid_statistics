import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import vaccineData from '../data/vaccineData'
import '../components/VaccineTable.css'

  class VaccineTable extends Component {

    constructor(props) {
      super(props)
      this.state = {
        users: [],
        isLoading: false,
        isError: false
      };
    }

    async componentDidMount() {
      this.setState({ isLoading: true })
      const response = await fetch('https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports')
      if (response.ok) {
        const users = await response.json()
        this.setState({ users:users.getBeneficiariesGroupBy, isLoading: false })
      } else {
        this.setState({ isError: true, isLoading: false })
      }
    }

    

    renderTableRows = () => {
      return this.state.users.map(user => {
        return (
          <tr key={user.title}>
            <td>{user.title}</td>
            <td>{user.partial_vaccinated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            <td>{user.totally_vaccinated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            <td>{user.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          </tr>
        )
      })
    }
    
    
    render(){
      const { users, isLoading, isError } = this.state

      if (isLoading) {
        return <div>Loading...</div>
      }
  
      if (isError) {
        return <div>Error</div>
      }

    return (
        <div className="vaccinetable">
            <Table  responsive striped bordered hover variant="dark" >
  <thead>
    <tr>
      <th>State/UT</th>
      <th>1st Dose</th>
      <th>2nd Dose</th>
      <th>Total Doses</th>
    </tr>
  </thead>
  <tbody>
  {this.renderTableRows()}

 {/* { vaccineData.map(function mapping(item){
    return(
      <tr>
      {this.renderTableRows()}

      <td>{item.state}</td>
      <td>{item.dose1}</td>
      <td>{item.dose2}</td>
      <td>{item.tdoses}</td>
    </tr>
  )
  })} */}
    
  </tbody>
</Table>
        </div>
    )}
}

export default VaccineTable
