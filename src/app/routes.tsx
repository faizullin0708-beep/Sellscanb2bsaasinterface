import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardLayout from "./components/DashboardLayout";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import AlertsPage from "./pages/AlertsPage";
import ConnectionsPage from "./pages/ConnectionsPage";
import CostsPage from "./pages/CostsPage";
import BillingPage from "./pages/BillingPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/signin",
    Component: SignInPage,
  },
  {
    path: "/signup",
    Component: SignUpPage,
  },
  {
    path: "/app",
    Component: DashboardLayout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "products", Component: ProductsPage },
      { path: "alerts", Component: AlertsPage },
      { path: "connections", Component: ConnectionsPage },
      { path: "costs", Component: CostsPage },
      { path: "billing", Component: BillingPage },
      { path: "settings", Component: SettingsPage },
      { path: "profile", Component: ProfilePage },
    ],
  },
]);
