import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { useDispatch } from "react-redux";
import { setUser } from "./store/slices/AuthSlice";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('user') || "{}")
  useEffect(() => {
    dispatch(setUser(user))
  }, [dispatch, user])
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/login' replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Home" element={<PrivateRoutes>
        <Home />
      </PrivateRoutes>} />
    </Routes>
  );
}

export default App;
