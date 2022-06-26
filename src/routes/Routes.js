import Layout from "components/layout/Layout";
import { useTheme } from "context/theme/ThemeContext";
import Checkout from "pages/checkout/Checkout";
import Home from "pages/home/Home";
import Products from "pages/products/Products";
import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function Routes() {
  const { themeState } = useTheme();

  return (
    <ThemeProvider theme={themeState}>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="checkout" element={<Checkout />} />
        </ReactDomRoutes>
      </Layout>
    </ThemeProvider>
  );
}

export default Routes;
