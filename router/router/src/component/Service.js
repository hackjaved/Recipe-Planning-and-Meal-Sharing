import React, { Component } from 'react'
import './Service.css'
export class Service extends Component {
  render() {
    return (
      <div>
           <section className="service-section">
              <div className="row">
                <div className="header-section">
                  <h1 className="Services">Our Services</h1>
                  <br /><br />
                  <div className="description"><h3><b>We are here to look at your services</b></h3></div>
                </div><div>
                </div>
              </div>
            </section>
            <section>
              <br />
              <br />
              <div className="container1">
                  
                <div className="box11"><h4 class="h">Available anytime</h4>
                  <br /><br />
                  <p><i>At [Your Recipe Sharing Platform], we believe that food brings people together. Join us in sharing the joy of cooking and creating memories through delightful recipes.</i></p>
                </div>
                <div className="box21"><h4 class="h">Support</h4>
                  <br/><br />
                  <p><i>Browse through a wide array of recipes, each thoughtfully curated by our community members. From quick and easy weeknight dinners to indulgent desserts, we've got something for every palate.</i></p>
                </div>
                <div className="box31">
                  <h4 class="h">Care</h4>
                  <br/><br />
                  <p><i>We take feedback seriously. If you have any questions, suggestions, or encounter any issues, our support team is here to assist you every step of the way</i></p>
                </div>
              </div>
            </section>
          </div>
    )
  }
}

export default Service