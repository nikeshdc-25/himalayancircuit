import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HomePage, { dataLoader } from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import AdminRoute from "./components/AdminRoute.jsx";
import { HelmetProvider } from "react-helmet-async";
import AdminPage from "./pages/AdminPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} loader={dataLoader} />
      <Route
        path="search/:keyword"
        element={<HomePage />}
        loader={dataLoader}
      />
      <Route
        path="search/:keyword/page/:pageNumber"
        element={<HomePage />}
        loader={dataLoader}
      />
      <Route
        path="page/:pageNumber"
        element={<HomePage />}
        loader={dataLoader}
      />
      <Route path="login" element={<LoginPage />} />
      <Route path="payment-information" element={<PaymentInfo />} />
      <Route path="disclaimer" element={<Disclaimer />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-and-conditions" element={<TnCPage />} />
      <Route path="" element={<AdminRoute />}></Route>
      <Route path="/admin" element={<AdminPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </HelmetProvider>
);
