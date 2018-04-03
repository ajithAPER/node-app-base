import React from 'react';
import {
  render
} from 'react-dom';

import Splash from '../universal/components/Splash';

import './index.css';

render(
  (
    <Splash />
  ),
  document.getElementById('application')
);
