import { User } from '../types/user';
import { wait } from '../wait';

export async function getAllUsers(): Promise<User[]> {
  const response = await fetch('http://localhost:3001/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const users = await response.json();
  return users;
}

export async function getUserById(id: string): Promise<User> {
  await wait(3_000);

  const response = await fetch(`http://localhost:3001/users/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  const user = await response.json();
  return user;
}
