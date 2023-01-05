import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import { useDispatch } from "react-redux";
import { setUser } from "./store/slices/AuthSlice";
import PrivateRoutes from "./components/PrivateRoutes";
import Attendance from "./pages/Attendance";
import Layout from "./components/Layout";
import People from "./pages/People";
import Request from "./pages/Request";
import Access from "./pages/Access";
import Document from "./pages/Document";

function App() {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('user') || "{}")
  useEffect(() => {
    dispatch(setUser(user))
  }, [dispatch, user])
  return (
    <Routes>
      <Route path="/" element={<Navigate to={user ? '/Dashboard' : '/login'} />} />
      <Route path="/login" element={<Login />} />
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
