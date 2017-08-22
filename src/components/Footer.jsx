import React from "react"

const Footer = () => (
  <footer className="footer-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mail-me text-center">
            <a href="mailto:eric@ericmaicon.com.br">eric@ericmaicon.com.br</a>
          </div>
        </div>
      </div>
      <div className="row margin-top-footer">
        <div className="col-sm-6">
          <div className="social-links">
            <ul>
              <li>
                <a href="https://facebook.com/eric.maicon.3" target="_blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/eric_maicon" target="_blank">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/ericmaicon/" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/ericmaicon" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-6">
          <p>&copy;Copyright 2017 Creato | All RightReserved.</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
