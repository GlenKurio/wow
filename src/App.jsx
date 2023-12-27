import { Route, Routes, BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import LandingLayout from "./components/layouts/landingLayout/LandingLayout";
import HomePage from "./pages/landing/home/HomePage";
import AuthPage from "./pages/landing/auth/AuthPage";
import AppLayout from "./components/layouts/appLayout/AppLayout";
import AppHome from "./pages/app/AppHome";
import RootRoute from "./pages/RootRoute";
import RegisterTransaction from "./pages/app/RegisterTransaction";
import TransactionDetails from "./pages/app/TransactionDetails";
import ProtectedRoute from "./components/layouts/appLayout/ProtectedRoute";
import EditProfile from "./pages/app/EditProfile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<RootRoute />}>
            <Route path="/" element={<LandingLayout />}>
              <Route index element={<HomePage />} />
              <Route path="auth" element={<AuthPage />} />
            </Route>
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AppHome />} />
              <Route path="edit-profile" element={<EditProfile />} />
              <Route path="new-transaction" element={<RegisterTransaction />} />
              <Route
                path="transaction-details/:id"
                element={<TransactionDetails />}
              />
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
    </QueryClientProvider>
  );
}

export default App;
