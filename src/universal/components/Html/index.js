import React from 'react';
import PropTypes from 'prop-types';

class Html extends React.Component {
  render() {
    return (
      <html
        lang="en"
        style={{
          height: "100%",
          width: "100%"
        }}
        >
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" type="text/css" href="/statics/css/index.css" />
        </head>
        <body
          style={{
            height: "100%",
            width: "100%",
            margin: 0
          }}
          >
          <div
            style={{
              height: "100%",
              width: "100%"
            }}
            id="application"
            >
            {this.props.content}
          </div>
          <script src="/statics/index.js" charSet="UTF-8" />
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  content: PropTypes.object.isRequired
};

export default Html;
