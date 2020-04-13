import React from 'react';
import ReactDOM from 'react-dom';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';
// eslint-disable-next-line import/extensions
import App from './app';

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    runtime.register()
      .then(() => console.log('Service Worker: Registered (Pages)'))
      .catch((err) => console.log(`Service Worker: Error: ${err}`));
  });
}
