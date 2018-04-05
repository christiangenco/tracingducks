import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import Helmet from 'react-helmet'

import 'prismjs/themes/prism-tomorrow.css'
import './style.css'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            <img
              src="/logo-small.png"
              alt=""
              style={{ maxHeight: '1em', marginBottom: 0, marginRight: '5px' }}
            />
            Tracing Ducks
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            <img
              src="/logo-small.png"
              alt=""
              style={{ maxHeight: '1em', marginBottom: 0, marginRight: '5px' }}
            />
            Tracing Ducks
          </Link>
        </h3>
      )
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Helmet>
          <link
            rel="stylesheet"
            href="https://unpkg.com/purecss@1.0.0/build/pure-min.css"
            integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/purecss@1.0.0/build/grids-responsive-min.css"
          />
        </Helmet>
        {header}
        {children()}
      </Container>
    )
  }
}

export default Template
