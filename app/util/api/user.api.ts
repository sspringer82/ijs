import { User } from '../types/user';

export async function getAllUsers(): Promise<User[]> {
  const response = await fetch('http://localhost:3001/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const users = await response.json();
  return users;
}

export async function getUserById(id: string): Promise<User> {
  const response = await fetch(`http://localhost:3001/users/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  const user = await response.json();
  return user;
}
