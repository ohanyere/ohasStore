import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { stripePromise } from './utils/stripe/stripe.utils.js'
import {Elements} from "@stripe/react-stripe-js"
import store from './Store/Store.js'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
    </Provider>
  </StrictMode>,
)
