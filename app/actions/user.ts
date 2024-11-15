'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { errorExtractor } from '../util/errorExtractor';
import { wait } from '../util/wait';

export async function deleteUser(id: string): Promise<void> {
  const response = await fetch(`http://localhost:3001/users/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete user');
  }

  revalidatePath('/users');
}

export async function createUser(
  errorState: string,
  formData: FormData
): Promise<string> {
  await wait(1_000);
  try {
    const user = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
    };

    const response = await fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      throw new Error('Failed to create user');
    }
  } catch (error) {
    return errorExtractor(error);
  }
  revalidatePath('/users');
  redirect('/users');
}
