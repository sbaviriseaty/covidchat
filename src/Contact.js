import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>CONTACT</h2>
        <p>
          <ul>
            <li>
              Andrei: andrei.mitrofan.99@gmail.com, Bioengineering + Neuroscience,
              Rice University '23
            </li>

            <li>
              Eileen: esduong8921@gmail.com, Mechanical Engineering, Boston
              University '23
            </li>

            <li>
              Shubha: www.linkedin.com/in/svasisht2023, Computational Biology,
              University of Pennsylvania '23
            </li>

            <li>
              Sruthika: sbaviriseaty@ufl.edu, Biomedical Engineering, University
              of Florida '22
            </li>
          </ul>
        </p>
      </div>
    );
  }
}

export default Contact;
