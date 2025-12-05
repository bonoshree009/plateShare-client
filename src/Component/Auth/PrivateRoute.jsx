import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function PrivateRoute() {
  const { user, loading } = useContext(AuthContext);
  const loc = useLocation();

  if (loading) return <div>Loading...</div>; // or spinner
  if (!user) return <Navigate to="/login" state={{ from: loc }} replace />;
  return <Outlet />;
}
