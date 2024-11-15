import { Book } from '@/app/util/types/Book';

export async function getAllBooks(): Promise<Book[]> {
  const response = await fetch('http://localhost:3001/books');
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.');
  }
  const books = await response.json();
  return books.map((book: Book) => ({
    ...book,
    release: new Date(book.release),
  }));
}
