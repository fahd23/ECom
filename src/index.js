import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./Pages/Cart";
import ErrorPage from "./Pages/ErrorPage";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import SuccessPayment from "./Pages/SuccessPayment";
import FailedPayment from "./Pages/FailedPayment";
import { Auth0Provider } from "@auth0/auth0-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/category/:catgoryId",
        element: <Category />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/payment/success",
        element: <SuccessPayment />,
      },
      {
        path: "/payment/failed",
        element: <FailedPayment />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-u1ka5gohcvj7n6q7.us.auth0.com"
    clientId="Ij7kI1A84UUWJFqwGHDAwoNhpD7Fiir5"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Auth0Provider>
);
