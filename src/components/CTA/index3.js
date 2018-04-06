import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class EmailCTA extends Component {
  componentDidMount() {
    // <script async id="_ck_364410" src="https://forms.convertkit.com/364410?v=7"></script>
    console.log(this.ref)
  }
  render() {
    return (
      <div>
        EMAIL CTA
        {/* <div
          dangerouslySetInnerHTML={{
            __html: `<script async id="_ck_364410" src="https://forms.convertkit.com/364410?v=7"></script>`,
          }}
        /> */}
        <div ref={ref => (this.ref = ref)} />
      </div>
    )
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
EmailCTA.propTypes = {}

export default EmailCTA
