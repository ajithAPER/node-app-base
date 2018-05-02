import React from 'react';
import PropTypes from 'prop-types';

import FavIcon from '../../images/favicon.ico';

export default class Html extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <html
        lang="en"
        >
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
          <link rel="stylesheet" type="text/css" href="/statics/css/index.css" />
        </head>
        <body
          >
          <div
            id="application"
            >
            {this.props.children}
          </div>
          <script src="/statics/js/index.js" charSet="UTF-8" />
        </body>
      </html>
    );
  }
}
