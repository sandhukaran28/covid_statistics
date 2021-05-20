import React from 'react';
import tableData from '../data/tableData';
import { Table } from 'react-bootstrap';
import './MainTable.css';
import axios from 'axios';
import Spinner1 from '../pics/Spinner-3.gif'
import {Image} from 'react-bootstrap'
class MainTable extends React.Component {

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
    const response = await fetch('https://www.mohfw.gov.in/data/datanew.json')
    if (response.ok) {
      const users = await response.json()
      this.setState({ users:users, isLoading: false })
    } else {
      this.setState({ isError: true, isLoading: false })
    }
  }

  renderTableRows = () => {
    return this.state.users.map(user => {
      if(user.state_name!='')
      return (
        <tr key={user.sno}>
          <td>{user.state_name}</td>
          <td>{user.positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td>{user.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td>{user.new_positive.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td>{user.cured.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td>{user.new_cured.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td>{user.death.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td>{user.new_death.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
      
        </tr>
      )
    })
  }
  
  render(){
    const { users, isLoading, isError } = this.state

    if (isLoading) {
      return<center><div>Loading....</div></center> 
      
    }

    if (isError) {
      return <div>Error...</div>
    }

    return (
        <div>
            <Table responsive bordered className="text-white">
  <thead>
    <tr>
      <th>State/UT</th>
      <th>Confirmed</th>
      <th>Active</th>
      <th>New Cases</th>
      <th>Recovered</th>
      <th>New Recovered</th>
      <th>Deceased</th>
      <th>New Deceased</th>
      
    </tr>
  </thead>
  <tbody>
  {this.renderTableRows()}
  </tbody>
</Table>
        </div>
    )
  }
}

export default MainTable
