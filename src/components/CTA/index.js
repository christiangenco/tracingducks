import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet'

import './style.css'
import convertKit from './convertKit'

import Mailtrain from './Mailtrain'

class CTA extends Component {
  componentDidMount() {
    // convertKit()
  }
  render() {
    return <Mailtrain />
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// CTA.propTypes = {

// };

export default CTA
