import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import "styles/main.scss"
import store from "./store"
import history from "./browserHistory"
import Header from "components/Header"
import About from "components/About"
import Skills from "components/Skills"
import ContactContainer from "features/contact/ContactContainer"
import Footer from "components/Footer"

ReactDOM.render(
  <Provider store={store()}>
    <div>
      <Header />
      <About />
      <Skills />
      <ContactContainer />
      <Footer />
    </div>
  </Provider>, document.getElementById("app"))
