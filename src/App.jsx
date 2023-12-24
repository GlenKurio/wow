import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LandingLayout from "./components/layouts/landingLayout/LandingLayout";
import HomePage from "./pages/landing/home/HomePage";
import AuthPage from "./pages/landing/auth/AuthPage";
import AppLayout from "./components/layouts/appLayout/AppLayout";
import AppHome from "./pages/app/AppHome";
import RootRoute from "./pages/RootRoute";
import RegisterTransaction from "./pages/app/RegisterTransaction";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
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
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "4px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
        }}
      />
    </>
  );
}

export default App;
