import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import PrivateRoutes from "./components/PrivateRoutes";
import Attendance from "./pages/Attendance";
import Layout from "./components/Layout";
import People from "./pages/People";
import Request from "./pages/Request";
import Access from "./pages/Access";
import Document from "./pages/Document";
import useAuth from "./ahooks/useAuth";

function App() {
  const { auth } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={auth?.status ? '/dashboard' : '/login'} />}
      />
      <Route
        path={auth?.status === true ? "/dashboard" : '/login'}
        element={auth?.status === true ? <Layout /> : <Login />}
      />
      <Route element={<PrivateRoutes />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/people" element={<People />} />
          <Route path="/request" element={<Request />} />
          <Route path="/access" element={<Access />} />
          <Route path="/Document" element={<Document />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
