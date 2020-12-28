import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/auth';
import { AppLoading } from 'expo';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {

  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <AppLoading />
    );
  }

  return (
    signed ? <AppRoutes /> : <AuthRoutes />
  )
}
