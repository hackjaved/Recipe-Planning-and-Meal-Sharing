import React, { Component } from 'react'
import './About.css'
export class About extends Component {
  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <div className="container">
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Review</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Extra Links</h4>
            <ul>
              <li><a href="#">Account Info</a></li>
              <li><a href="#">Order Item</a></li>
              <li><a href="#">Payment Method</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
    
            </div>
          </div>
        </div>
      </div>
    
    )
  }
}

export default About