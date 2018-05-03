import React from 'react';
import {
  render as Render
} from 'react-dom';

import Splash from '../universal/components/splash';

import './index.css';

Render(
  (
    <Splash />
  ),
  document.getElementById('application')
);
