import React from "react"
import classnames from "classnames"

/**
 * regular field used on form
 *
 * @param  {[type]} input       [description]
 * @param  {[type]} placeholder [description]
 * @param  {[type]} type        [description]
 * @param  {[type]} label       [description]
 * @param  {[type]} autoFocus   [description]
 * @param  {[type]} meta        [description]
 * @param  {[type]} error       [description]
 * @param  {[type]} warning     [description]
 * @return {[type]}             [description]
 */
const Input = ({
  input,
  placeholder,
  type,
  label,
  autoFocus,
  meta: { touched, error }
}) => (
  <div>
    <input
      {...input}
      placeholder={placeholder}
      autoFocus={autoFocus}
      type={type}
      className={classnames({
        "form-control": true,
        "has-error": touched && error
      })}
    />
    {touched && (error && <span className="form-style__error">{error}</span>)}
  </div>
)

export default Input
