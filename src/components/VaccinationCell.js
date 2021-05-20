import React, { Component } from "react";
import MainCell from "./MainCell";
import "../pages/Vaccine.css";

class VaccinationCell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: [],
      isLoading: false,
      isError: false,
      today: "",
      total_doses: "",
      today_dose_one:"",
      today_dose_two:"",
      tot_dose_1:"",
      tot_dose_2:"",
      aefi:"",
      today_aefi:""
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch(
      "https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports"
    );
    if (response.ok) {
      var stats = await response.json();
      this.setState({
        stats: stats.topBlock.vaccination,
        isLoading: false,
        today: stats.topBlock.vaccination.today
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          total_doses: stats.topBlock.vaccination.total_doses
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          today_dose_one:stats.topBlock.vaccination.today_dose_one
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          today_dose_two:stats.topBlock.vaccination.today_dose_two
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          tot_dose_1:stats.topBlock.vaccination.tot_dose_1
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          tot_dose_2:stats.topBlock.vaccination.tot_dose_2
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          aefi:stats.topBlock.vaccination.aefi
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          today_aefi:stats.topBlock.vaccination.today_aefi
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      });
    } else {
      this.setState({ isError: true, isLoading: false });
    }
  }

  render() {
    const { stats, isLoading, isError } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Error</div>;
    }
    return (
      <div style={{ marginLeft: "10%" }} className="row">
        <div className="col-sm">
          <MainCell
            name="Tot Vaccination Doses"
            ins={"+ "+this.state.today}
            total={this.state.total_doses}
            color="red"
          />
        </div>
        <div className="col-sm">
          <MainCell
            name="Dose-1 Vaccinations"
            ins={"+ "+this.state.today_dose_one}
            total={this.state.tot_dose_1}
            color="blue"
          />
        </div>
        <div className="col-sm">
          <MainCell
            name="Dose-2 Vaccinations"
            ins={"+ "+this.state.today_dose_two}
            total={this.state.tot_dose_2}
            color="green"
          />
        </div>
        <div className="col-sm">

          <MainCell
            name="AEFI Reported"
            ins={"+ "+this.state.today_aefi}
            total={this.state.aefi}
            color="grey"
          />
        </div>
      </div>
    );
  }
}

export default VaccinationCell;
