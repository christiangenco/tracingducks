import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet'

import './style.css'
import convertKit from './convertKit'

import Mailtrain from './Mailtrain'

class EmailCTA extends Component {
  componentDidMount() {
    // convertKit()
  }
  render() {
    // return <p>email cta</p>
    return <Mailtrain />
    return (
      <div>
        <Helmet>
          {/* <script src="https://assets.convertkit.com/assets/CKJS4.js?v=21" /> */}
        </Helmet>
        <div className="ck_form_container ck_inline" data-ck-version="7">
          <div className="ck_form ck_minimal">
            <div className="ck_form_fields">
              <h3 className="ck_form_title">Join the newsletter!!!</h3>
              <div className="ck_description">
                <p>Subscribe to get our latest content by email.</p>
              </div>

              <div id="ck_success_msg" style={{ display: 'none' }}>
                <p>
                  Success! Now check your email to confirm your subscription.
                </p>
              </div>

              <form
                id="ck_subscribe_form"
                className="ck_subscribe_form"
                action="https://app.convertkit.com/landing_pages/364410/subscribe"
                data-remote="true"
              >
                <input
                  type="hidden"
                  defaultValue="{&quot;form_style&quot;:&quot;minimal&quot;}"
                  id="ck_form_options"
                />
                <input
                  type="hidden"
                  name="id"
                  defaultValue="364410"
                  id="landing_page_id"
                />
                <input
                  type="hidden"
                  name="ck_form_recaptcha"
                  defaultValue=""
                  id="ck_form_recaptcha"
                />
                <div className="ck_errorArea">
                  <div id="ck_error_msg" style={{ display: 'none' }}>
                    <p>
                      There was an error submitting your subscription. Please
                      try again.
                    </p>
                  </div>
                </div>
                <div className="ck_control_group ck_email_field_group">
                  <label
                    className="ck_label"
                    htmlFor="ck_emailField"
                    style={{ display: 'none' }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="ck_email_address"
                    id="ck_emailField"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div
                  className="ck_control_group ck_captcha2_h_field_group ck-captcha2-h"
                  style={{
                    position: 'absolute !important',
                    left: '-999em !important',
                  }}
                >
                  <input
                    type="text"
                    name="captcha2_h"
                    className="ck-captcha2-h"
                    id="ck_captcha2_h"
                    placeholder="We use this field to detect spam bots. If you fill this in, you will be marked as a spammer."
                  />
                </div>

                <button
                  className="subscribe_button ck_subscribe_button btn fields"
                  id="ck_subscribe_button"
                >
                  Subscribe
                </button>
                <span className="ck_guarantee">
                  We won&#39;t send you spam. Unsubscribe at any time.
                  {false && (
                    <a
                      className="ck_powered_by"
                      href="https://convertkit.com/?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"
                    >
                      Powered by ConvertKit
                    </a>
                  )}
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
// EmailCTA.propTypes = {

// };

export default EmailCTA
