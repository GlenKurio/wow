import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingLayout from "./components/layouts/landingLayout/LandingLayout";
import HomePage from "./pages/landing/home/HomePage";
import AuthPage from "./pages/landing/auth/AuthPage";
import AppLayout from "./components/layouts/appLayout/AppLayout";
import AppHome from "./pages/app/AppHome";
import RootRoute from "./pages/RootRoute";
import RegisterTransaction from "./pages/app/RegisterTransaction";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootRoute />}>
      <Route path="/" element={<LandingLayout />}>
        <Route index element={<HomePage />} />
        <Route path="auth" element={<AuthPage />} />
      </Route>
      <Route path="app" element={<AppLayout />}>
        <Route index element={<AppHome />} />
        <Route path="new-transaction" element={<RegisterTransaction />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
