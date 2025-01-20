import React from 'react'
    import PreFooter from './PreFooter'

    export default function Footer() {
      return (
        <>
          <PreFooter />
          <footer className="footer">
            <div className="container">
              <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Dog Directory. All rights reserved.</p>
                <nav>
                  <Link to="/privacy">Privacy Policy</Link>
                  <Link to="/terms">Terms of Service</Link>
                </nav>
              </div>
            </div>
          </footer>
        </>
      )
    }
