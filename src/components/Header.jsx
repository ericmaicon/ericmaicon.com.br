import React, { Component } from "react"
import Typed from "typed.js"
import Scroll, { Link } from "react-scroll"

import Menu from "components/Menu"

export default class Header extends Component {

  componentDidMount() {
    new Typed(".typewrite", {
      strings: ["Web Developer", "Traveler", "Dreamer"],
      typeSpeed: 180,
      backDelay: 1000,
      backSpeed: 100
    })
  }

  render() {
    return (
      <header id="home" className="welcome-area">
        <Menu />
        <div className="welcome-video-area">
          <div className="container">
            <div className="row">
             <div className="col-md-12">
                <div className="header-text text-center">
                  <h1 className="typewrite"></h1>
                  <div className="social-links header-links">
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
                  <div className="home-arrow-down">
                    <Link href="javascript:;" className="smoth-scroll btn" activeClass="active" to="about" spy={true} smooth={true} duration={500} offset={-50}>
                      <i className="fa fa-angle-down"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
