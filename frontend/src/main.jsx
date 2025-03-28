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
import PaymentInfo from "./pages/PaymentInfoPage.jsx";
import Disclaimer from "./pages/DesclaimerPage.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicyPage.jsx";
import ReportPage from "./pages/ReportPage.jsx";
import TnCPage from "./pages/TnCPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NewsletterPage from "./pages/Newsletter.jsx";
import NewsletterListPage from "./pages/admin/NewsletterListPage.jsx";
import TourPackageListPage from "./pages/admin/TourPackageListPage.jsx";
import TourPackageEditPage from "./pages/admin/TourPackageEditPage.jsx";
import UsersPage from "./pages/admin/UsersPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
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
        <Route path="payment-information" element={<PaymentInfo />} />
        <Route path="disclaimer" element={<Disclaimer />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-and-conditions" element={<TnCPage />} />
        <Route path="report" element={<ReportPage />} />
        <Route path="contact-form" element={<ContactPage />} />
        <Route path="newsletter" element={<NewsletterPage />} />
        <Route path="faqs" element={<FAQPage />} />

        <Route path="" element={<AdminRoute />}>
          <Route path="admin/newsletters" element={<NewsletterListPage />} />
          <Route path="admin/packages" element={<TourPackageListPage />} />
          <Route path="admin/users" element={<UsersPage />} />
          <Route
            path="admin/packages/page/:pageNumber"
            element={<TourPackageListPage />}
          />
          <Route
            path="admin/package/:id/edit"
            element={<TourPackageEditPage />}
          />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </HelmetProvider>
);
