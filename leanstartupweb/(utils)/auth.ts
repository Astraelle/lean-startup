// utils/auth.ts
import { User } from '../../(types)';

export function getAuthUser(): User | null {
  if (typeof window === 'undefined') return null;
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;

  try {
    return JSON.parse(userStr) as User;
  } catch {
    return null;
  }
}

export function isAdmin(): boolean {
  const user = getAuthUser();
  return user?.role === 'admin';
}
