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
        <h2>Join the Tracing Ducks Newsletter</h2>
        <p>
          Sign up to the Tracing Ducks email list to get more helpful articles
          in the future
        </p>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="">First name</label>
          <input
            type="text"
            value={first}
            onChange={e => this.setState({ first: e.target.value })}
          />
          {/* <input
            type="text"
            value={last}
            onChange={e => this.setState({ last: e.target.value })}
          /> */}
          <label htmlFor="">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
          />

          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    )
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
Mailtrain.propTypes = {}

export default Mailtrain
