import React, { Component } from "react"
import classnames from "classnames"

/**
 * https://gist.github.com/julianocomg/296469e414db1202fc86
 *
 * @type {Object}
 */
export default class AffixWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      affix: false
    }
  }

  /**
   * @return {void}
   */
  handleScroll = () => {
    var affix = this.state.affix
    var offset = this.props.offset
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop

    if (!affix && scrollTop >= offset) {
      this.setState({
        affix: true
      })
    }

    if (affix && scrollTop < offset) {
      this.setState({
        affix: false
      })
    }
  }

  /**
   * @return {void}
   */
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  /**
   * @return {void}
   */
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  render() {
    const { className } = this.props
    let classes = {}
    classes[className] = true

    classes = {
      ...classes,
      "menu-bg": this.state.affix
    }

    return (
      <div
        {...this.props}
        className={classnames(classes)}
      >
        {this.props.children}
      </div>
    )
  }
}
