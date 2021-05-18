import React, { Component } from 'react'
import MainCell from './MainCell'
import '../pages/Vaccine.css'


class VaccinationCell extends Component {

    constructor(props) {
        super(props)
        this.state = {
          stats: [],
          isLoading: false,
          isError: false
        };
      }

      async componentDidMount() {
        this.setState({ isLoading: true })
        const response = await fetch('https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports')
        if (response.ok) {
          const stats = await response.json()
          this.setState({ stats:stats.topBlock.vaccination, isLoading: false })
        } else {
          this.setState({ isError: true, isLoading: false })
        }
      }
   render(){
    const { stats, isLoading, isError } = this.state

    if (isLoading) {
        return <div>Loading...</div>
      }
  
      if (isError) {
        return <div>Error</div>
      }
    return (
        <div style={{ display: "flex" , justifyContent: 'space-evenly'}}>
           <MainCell name="Tot Vaccination Doses" ins={this.state.stats.today} total={this.state.stats.total_doses} color="red"/>
           <MainCell name="Dose-1 Vaccinations" ins={this.state.stats.today_dose_one} total={this.state.stats.tot_dose_1} color="blue"/>
           <MainCell name="Dose-2 Vaccinations" ins={this.state.stats.today_dose_two} total={this.state.stats.tot_dose_2} color="green"/>
           <MainCell name="AEFI Reported" ins={this.state.stats.today_aefi} total={this.state.stats.aefi} color="grey"/>
    </div>
        )}
}

export default VaccinationCell
