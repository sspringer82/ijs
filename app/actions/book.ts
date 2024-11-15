'use server';

import { revalidatePath } from 'next/cache';

export async function deleteBook(id: string): Promise<void> {
  const response = await fetch(`http://localhost:3001/books/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete book');
  }

  revalidatePath('/books');
}
