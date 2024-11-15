'use server';

import { revalidatePath } from 'next/cache';

export async function deleteUser(id: string): Promise<void> {
  const response = await fetch(`http://localhost:3001/users/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete user');
  }

  revalidatePath('/users');
  revalidatePath(`/users/${id}`);
  revalidatePath(`/users/[id]`);
}
