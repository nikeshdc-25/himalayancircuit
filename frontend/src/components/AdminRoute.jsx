import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminRouter() {
  const { userInfo } = useSelector((state) => state.auth);

  return ( userInfo.isSuperuser || userInfo.isBlogUser || userInfo.isTnTUser) ? <Outlet /> : <Navigate to="/login" />;
}

export default AdminRouter;
