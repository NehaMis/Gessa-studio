import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import './main.css';

import App from './src/app/app';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
