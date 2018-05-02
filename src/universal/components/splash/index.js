import React from 'react';
import PropTypes from 'prop-types';

export default class Splash extends React.Component {
  static propTypes: {
    content: PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        Splash
      </div>
    );
  }
}
