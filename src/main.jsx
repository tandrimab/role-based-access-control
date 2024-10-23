import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./components/ui/Layout";
import { Home } from "./components/ui/Home";
import { About } from "./components/ui/About";
import { ErrorBoundary } from "./components/ui/ErrorBoundary";
import { UserContextProvider } from "./components/store/UserContextProvider";
import { Login } from "./components/ui/Login";
import { ProtectedRoute } from "./components/ui/ProtectedRoute";
import { Profile } from "./components/ui/Profile";
import { Admin } from "./components/ui/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorBoundary />}>
      <Route path="" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<About />} />
      <Route
        path="profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
);
