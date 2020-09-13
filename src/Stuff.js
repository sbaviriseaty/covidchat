import React, { Component } from "react";
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <h2>RESOURCES</h2>        
        <p>
          <a href = "https://news.google.com/covid19/map?hl=en-US&gl=US&ceid=US%3Aen">Google Coronavirus Cases</a>
          <br></br>
          <a href = "https://www.cdc.gov/coronavirus/2019-nCoV/index.html">CDC Coronavirus Disease 2019</a>
          <br></br>
          <a href = "https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html">CDC Guidance on Masks</a>
          <br></br>
          <a href = "https://covid.cdc.gov/covid-data-tracker/#cases_totalcases">CDC COVID Data Tracker</a>
        </p>
      </div>
    );
  }
}
 
export default Stuff;