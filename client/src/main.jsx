import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "./components/ThemeProvider";
import TokenExpirationChecker from "./TokenExpiryCheck/isTokenExpired";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TokenExpirationChecker>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </PersistGate>
  </TokenExpirationChecker>
);
