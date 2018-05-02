import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

class Html extends React.Component {
  render() {
    return (
      <html
        lang="en"
        >
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" type="text/css" href="/statics/css/index.css" />
        </head>
        <body
          >
          <div
            id="application"
            >
            <this.props.content
              />
          </div>
          <script src="/statics/js/index.js" charSet="UTF-8" />
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  content: PropTypes.func.isRequired
};

export default Html;
