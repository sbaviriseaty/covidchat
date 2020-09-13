import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>CONTACT</h2>
        <p>
          <ul>
            <li>
            <a href="mailto:am164@rice.edu">Andrei</a>
              : Bioengineering + Neuroscience,
              Rice University '23
            </li>
            <li>
            <a href="mailto:esduong8921@gmail.com">Eileen</a>
              : esduong8921@gmail.com, Mechanical Engineering, Boston
              University '23
            </li>
            <li>
            <a href="www.linkedin.com/in/svasisht2023">Shubha</a>
              : Computational Biology,
              University of Pennsylvania '23
            </li>

            <li>
            <a href="mailto:sbaviriseaty@ufl.edu">Sruthika</a>
              : Biomedical Engineering, University
              of Florida '22
            </li>
          </ul>
        </p>
      </div>
    );
  }
}

export default Contact;
