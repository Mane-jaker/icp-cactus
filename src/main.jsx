import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import * as cat_backend from "./declarations/cat_backend";
import { createClient } from "@connect2ic/core";
import { Connect2ICProvider } from "@connect2ic/react";
import { defaultProviders } from '@connect2ic/core/providers';


import { InternetIdentity } from "@connect2ic/core/providers/internet-identity"
const client = createClient({
  canisters: {
    cat_backend,
  },
  providers: [
    new InternetIdentity({
      // boolean
      dev: true,
      // The url for the providers frontend
      providerUrl: "http://be2us-64aaa-aaaaa-qaabq-cai.localhost:4943/",
      // The host used for canisters
      host: window.location.origin,
    }),
  ],
  globalProviderConfig: {
    dev: true,
  },
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Connect2ICProvider client={client}>
     <App />
    </Connect2ICProvider>
  </React.StrictMode>,
)
