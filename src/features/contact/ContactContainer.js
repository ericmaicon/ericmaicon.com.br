import React from "react"
import validate from "validate.js"
import { connect } from "react-redux"
import { reduxForm } from "redux-form"
import { compose, withHandlers } from "recompose"

import ContactForm from "./components/ContactForm"
import { contact } from "./contact"

const validationConstraints = {
  name: {
    presence: {
      message: "Name must be filled in."
    }
  },
  email: {
    presence: {
      message: "E-mail must be filled in."
    },
    email: {
      message: "E-mail must be valid."
    }
  },
  subject: {
    presence: {
      message: "Subject must be filled in."
    }
  },
  message: {
    presence: {
      message: "Message must be filled in."
    }
  }
}

const mapStateToProps = (state) => {
  return {
    contactDone: state.contact.contactDone
  }
}

const mapDispatchToProps = {
  contact
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: "contactForm",
    validate: (values) => validate(values, validationConstraints, {
      fullMessages: false
    })
  }),
  withHandlers({
    handleContact: ({ handleSubmit, contact }) => handleSubmit(values => contact(values))
  })
)(ContactForm)
