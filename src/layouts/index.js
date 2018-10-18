import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal, ThemeProvider } from 'styled-components';

import Header from '../components/header'
import defaultTheme from '../styles/theme'; 
import globalStyles from '../styles/global';


// import global css
injectGlobal`${globalStyles}`;

const Layout = ({ children, data }) => (
  <ThemeProvider theme={defaultTheme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Portfolio of Javier Williams' },
          { name: 'keywords', content: 'swe, software developer, software engineer' },
        ]}
        link={[{  "rel": "stylesheet", "href": "https://fonts.googleapis.com/css?family=Noto+Serif:400,700" }]}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        {children()}
      </div>
    </div>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
