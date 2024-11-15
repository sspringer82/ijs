'use server';

import { revalidatePath } from 'next/cache';
import { errorExtractor } from '../util/errorExtractor';
import { redirect } from 'next/navigation';

export async function deleteBook(id: string): Promise<void> {
  const response = await fetch(`http://localhost:3001/books/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete book');
  }

  revalidatePath('/books');
}

export async function createBook(
  errorState: string,
  formData: FormData
): Promise<string> {
  try {
    const book = {
      isbn: formData.get('isbn') as string,
      title: formData.get('title') as string,
      author: formData.get('author') as string,
      pages: formData.get('pages') as string,
      language: formData.get('language') as string,
      rating: formData.get('rating') as string,
      release: new Date().toISOString(),
    };

    // const book = Object.fromEntries(formData.entries());

    const response = await fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });

    if (!response.ok) {
      throw new Error('Failed to create book');
    }
  } catch (error) {
    return errorExtractor(error);
  }
  revalidatePath('/books');
  redirect('/books');
}
