import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const defaultState = {
  first: '',
  last: '',
  email: 'email@gmail.com',
  error: null,
  submittedAt: null,
  subscribedAt: null,
};

export class Mailtrain extends Component {
  state = defaultState;

  onSubmit = e => {
    e.preventDefault();

    const { first, last, email } = this.state;
    const { onConvert } = this.props;

    this.setState({ submittedAt: +new Date() });

    axios
      .post(
        'https://wt-christian-gen-co-0.run.webtask.io/mailtrain_api',
        // 'https://wt-christian-gen-co-0.run.webtask.io/mailtrain_api',
        // 'http://127.0.0.1:8080?foo=bar',
        // 'https://us-central1-webtask-199219.cloudfunctions.net/http',
        { first, last, email }
      )
      .then(res => {
        if (res && res.data && res.data.data && res.data.data.id) {
          const subscribedAt = +new Date();
          onConvert({
            first,
            last,
            email,
            mailtrainId: res.data.data.id,
            subscribedAt,
          });

          this.setState({
            subscribedAt,
          });
        } else {
          this.setState({
            error:
              'Uhoh - something went wrong. Refresh the page and try again? Tweet @cgenco? ...restart your computer?',
            submittedAt: null,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const { first, last, email, submittedAt, error, subscribedAt } = this.state;

    const isLoading = !!submittedAt;

    const isSubscribed = !!subscribedAt;

    if (isSubscribed) {
      return (
        <div className="card">
          <h2>Subscribed</h2>
          <p>Hey {name || 'there'}, thanks for subscribing!</p>
        </div>
      );
    }

    return (
      <div className="card">
        <h2>Tracing Ducks Club</h2>

        <form className="pure-form pure-form-stacked" onSubmit={this.onSubmit}>
          <fieldset>
            <legend>Sign up to get early access to more useful stuff</legend>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-md-1-3">
                <label htmlFor="email">Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  value={first}
                  onChange={e => this.setState({ first: e.target.value })}
                  disabled={isLoading}
                />
                <span className="pure-form-message">
                  Like, what your friends call you
                </span>
              </div>

              <div className="pure-u-1 pure-u-md-1-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => this.setState({ email: e.target.value })}
                  disabled={isLoading}
                />
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <label htmlFor="stylesheet">&nbsp;</label>
                <button
                  type="submit"
                  className={`pure-button pure-button-primary ${
                    isLoading ? 'loading' : ''
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Mailtrain.propTypes = {};

export default Mailtrain;
