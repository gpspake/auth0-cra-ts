import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppState, Auth0Provider} from '@auth0/auth0-react';
import history from './utils/history'

const onRedirectCallback = (appState: AppState) => {
    // Use the router's history module to replace the url
    history.replace(appState?.returnTo || window.location.pathname);
};
ReactDOM.render(
  <React.StrictMode>
      <Auth0Provider
          domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
          clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
          redirectUri={window.location.origin}
          onRedirectCallback={onRedirectCallback}
      >
        <App />
      </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
