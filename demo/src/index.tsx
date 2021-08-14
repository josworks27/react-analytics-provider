import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AnalyticsProvider} from '@every-analytics/react-analytics-provider';

ReactDOM.render(
  <React.StrictMode>
    <AnalyticsProvider gaTrackingId={process.env.REACT_APP_GA_TRACKING_ID!}>
      <App />
    </AnalyticsProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
