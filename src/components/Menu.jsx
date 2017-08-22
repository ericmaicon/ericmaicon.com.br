import React from "react"
import AffixWrapper from "./AffixWrapper"
import Scroll, { Link } from "react-scroll"

const Menu = () => (
  <AffixWrapper className="header-top-area" offset={400}>
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
            <div className="logo">
                <a href="/">
                  Eric Maicon
                </a>
            </div>
        </div>
        <div className="col-sm-9">
          <div className="mainmenu">
            <div className="navbar navbar-nobg">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="navbar-collapse collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="active">
                    <Link href="javascript:;" activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                      Home <div className="ripple-wrapper"></div>
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:;" activeClass="active" to="about" spy={true} smooth={true} duration={500} offset={-50}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:;" activeClass="active" to="skills" spy={true} smooth={true} duration={500} offset={-50}>
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link href="javascript:;" activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-50}>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AffixWrapper>
)

export default Menu
