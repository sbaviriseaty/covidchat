import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <p><em>Disclaimer: This chat bot is not intended to replace COVID-19 medical professionals. 
        If you are currently experiencing a medical emergency, please immediately consult a medical professional. 
        For more information, please read the official CDC COVID-19 guidelines.</em></p>

        <h2>ABOUT</h2>

        <p>This is a hack created for PennApps 2020 which is hosted by the University of Pennsylvania. 
          This is our first hackathon! 
          It was designed as an interactive interface for the user to detail their symptoms and potential contact with other people who have tested positive for COVID-19. 
          The chatbot then requests the location of the user in order to connect them with a COVID-19 testing site in their area. 
          This idea was the product of 3 days of coding and collaboration between the creators, Andrei, Eileen, Shubha, and Sruthika. 
          We hope that you enjoy the chatbot and encourage you to stay safe in these times of uncertainty. 
          Please get tested if you or a loved one may have been exposed to COVID-19!</p>
      </div>
    );
  }
}
 
export default Home;