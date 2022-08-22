import * as React from 'react';
import { authApi } from '../apiClient';
import { useAuth } from '../hooks';

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });
  async function handleLogin() {
    try {
      await login();
    } catch (error) {
      console.log('Login failed:', error);
    }
  }

  async function handleGetProfile() {
    try {
      await authApi.getProfile();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogout() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleGetProfile}>Get Profile</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
