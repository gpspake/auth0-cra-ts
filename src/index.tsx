import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "./utils/react-auth0-provider";
// import history from './utils/history'

// const onRedirectCallback = (appState?: { targetUrl: string; }) => {
//   history.push(
//     appState && appState.targetUrl
//       ? appState.targetUrl
//       : window.location.pathname
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
      client_id={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
      redirect_uri={window.location.origin}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE as string}
      // onRedirectCallback={onRedirectCallback}
    >
      <App/>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
