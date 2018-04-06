import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './style.css';
import convertKit from './convertKit';

import Mailtrain from './Mailtrain';

class CTA extends Component {
  state = {
    profile: null,
  };
  componentDidMount() {
    let profile;
    try {
      profile = JSON.parse(localStorage.getItem('profile'));
    } catch (e) {
      console.error(`Error reading from localStorage: ${e}`);
    }
    this.setState({ profile });
  }

  render() {
    const { profile } = this.state;

    if (profile) {
      return <pre>{JSON.stringify(profile, null, 2)}</pre>;
    }

    return (
      <Mailtrain
        onConvert={profile => {
          localStorage.setItem('profile', JSON.stringify(profile));
        }}
      />
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// CTA.propTypes = {

// };

export default CTA;
