import React from 'react';
import {
  render
} from 'react-dom';

import Splash from '../universal/components/Splash';

import indexCss from './index.css';

import sampleImg from './sample.jpg';

render(
  (
    <Splash />
  ),
  document.getElementById('application')
);
