import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import Routes from "routes/Routes";
import { GlobalStyles } from "styles/GlobalStyles";
import Providers from "context/providers/Providers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <Providers>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Providers>
  </Provider>
);
