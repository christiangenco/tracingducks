import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const defaultState = {
  first: '',
  last: '',
  email: 'email@gmail.com',
}

export class Mailtrain extends Component {
  state = defaultState

  onSubmit = e => {
    e.preventDefault()
    const { first, last, email } = this.state
    axios
      .post(
        'https://wt-christian-gen-co-0.run.webtask.io/mailtrain_api',
        // 'https://wt-christian-gen-co-0.run.webtask.io/mailtrain_api',
        // 'http://127.0.0.1:8080?foo=bar',
        // 'https://us-central1-webtask-199219.cloudfunctions.net/http',
        { first, last, email }
      )
      .then(res => {
        console.log(res)
        console.log(res.data)
        this.setState(defaultState)
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    const { first, last, email } = this.state
    return (
      <div className="card">
        <h2>Email List</h2>

        <form className="pure-form pure-form-stacked" onSubmit={this.onSubmit}>
          <fieldset>
            <legend>
              Sign up for the Tracing Ducks email list to get more useful stuff
            </legend>
            <div className="pure-g">
              <div className="pure-u-1 pure-u-md-1-3">
                <label htmlFor="email">First name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  value={first}
                  onChange={e => this.setState({ first: e.target.value })}
                />
                <span className="pure-form-message">{''}</span>
              </div>

              <div className="pure-u-1 pure-u-md-1-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="pure-u-1 pure-u-md-1-3">
                <label htmlFor="stylesheet">&nbsp;</label>
                <button
                  type="submit"
                  className="pure-button pure-button-primary"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Mailtrain.propTypes = {}

export default Mailtrain
