import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminRouter() {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo);
  return userInfo ? <Outlet /> : <Navigate to="/login" />;
}

export default AdminRouter;
