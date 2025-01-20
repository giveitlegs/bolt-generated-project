import React from 'react'
    import { Link } from 'react-router-dom'

    export default function PreFooter() {
      return (
        <section className="pre-footer">
          <div className="container">
            <div className="footer-columns">
              <div className="footer-column">
                <h4>Explore Breeds</h4>
                <ul>
                  <li><Link to="/breeds/small">Small Dog Breeds</Link></li>
                  <li><Link to="/breeds/medium">Medium Dog Breeds</Link></li>
                  <li><Link to="/breeds/large">Large Dog Breeds</Link></li>
                  <li><Link to="/breeds/popular">Most Popular Breeds</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                  <li><Link to="/care-guides">Dog Care Guides</Link></li>
                  <li><Link to="/training-tips">Training Tips</Link></li>
                  <li><Link to="/nutrition">Dog Nutrition</Link></li>
                  <li><Link to="/health">Health & Wellness</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>About Us</h4>
                <ul>
                  <li><Link to="/about">Our Mission</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                  <li><Link to="/terms">Terms of Service</Link></li>
                </ul>
              </div>

              <div className="footer-column">
                <h4>Connect</h4>
                <ul>
                  <li><Link to="/blog">Dog Blog</Link></li>
                  <li><Link to="/community">Community Forum</Link></li>
                  <li><Link to="/newsletter">Subscribe to Newsletter</Link></li>
                  <li><Link to="/social">Social Media</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )
    }
