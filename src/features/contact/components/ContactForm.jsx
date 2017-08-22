import React from "react"
import { Field } from "redux-form"
import PropTypes from "prop-types"

import Input from "forms/Input"
import TextArea from "forms/TextArea"

const ContactForm = ({
  handleContact,
  contactDone
}) => (
  <section id="contact" className="contact-me-area section-padding">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2>contact me!</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <form
            className="contact-form"
            onSubmit={handleContact}
            method="post"
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <Field
                  name="name"
                  component={Input}
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="col-md-6 form-group">
                <Field
                  name="email"
                  component={Input}
                  type="email"
                  placeholder="E-mail"
                />
              </div>
              <div className="col-md-12 form-group">
                <Field
                  name="subject"
                  component={Input}
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="col-md-12 form-group">
                <Field
                  name="message"
                  component={TextArea}
                  placeholder="Message"
                />
              </div>
              <div className="col-md-12 text-center">
                <button className="btn" type="submit">Submit Now</button>
              </div>
              {(contactDone && (
                <div className="col-md-12 text-center">
                  <br />
                  <p className="alert-success">I have received your mail, I will get back to you soon!</p>
                </div>
              ))}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
)

ContactForm.propTypes = {
  handleContact: PropTypes.func.isRequired,
  contactDone: PropTypes.bool.isRequired
}

export default ContactForm
