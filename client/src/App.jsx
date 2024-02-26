import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import Donar from "./pages/Dashboard/Donar";
import Hospitals from "./pages/Dashboard/Hospitals";
import OrganizationPage from "./pages/Dashboard/OrganizationPage";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import DonarList from "./pages/admin/DonarList";
import HospitalList from "./pages/admin/HospitalList";
import OrgList from "./pages/admin/OrgList";
import AdminHome from "./pages/admin/AdminHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/analytics",
    element: (
      <ProtectedRoute>
        <Analytics />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <PublicRoute>
        <Register />
      </PublicRoute>
    ),
  },
  {
    path: "/donar",
    element: (
      <ProtectedRoute>
        <Donar />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hospital",
    element: (
      <ProtectedRoute>
        <Hospitals />
      </ProtectedRoute>
    ),
  },
  {
    path: "/consumer",
    element: (
      <ProtectedRoute>
        <Consumer />
      </ProtectedRoute>
    ),
  },
  {
    path: "/donation",
    element: (
      <ProtectedRoute>
        <Donation
         />
      </ProtectedRoute>
    ),
  },
  {
    path: "/organization",
    element: (
      <ProtectedRoute>
        <OrganizationPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/donar-list",
    element: (
      <ProtectedRoute>
        <DonarList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/hospital-list",
    element: (
      <ProtectedRoute>
        <HospitalList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/org-list",
    element: (
      <ProtectedRoute>
        <OrgList />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminHome />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
