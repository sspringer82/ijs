import { NextPage } from 'next';
import { Book } from '@/app/util/types/Book';
import { getAllBooks } from '@/app/util/api/book';
import Link from 'next/link';
import Delete from './components/Delete';

const BooksListPage: NextPage = async () => {
  let books: Book[] = [];
  let errorMessage: string | null = null;

  try {
    books = await getAllBooks();
  } catch (error) {
    errorMessage = error instanceof Error ? error.message : 'An error occurred';
  }

  return (
    <div>
      {errorMessage && <div>{errorMessage}</div>}
      {books.length === 0 && <div>No book found.</div>}
      {books.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>ISBN</th>
              <th>Title</th>
              <th>Author</th>
              <th>Release Date</th>
              <th>Pages</th>
              <th>Language</th>
              <th>Rating</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.release.getFullYear()}</td>
                <td>{book.pages}</td>
                <td>{book.language}</td>
                <td>{book.rating}</td>
                <td>
                  <Link href={`/books/${book.id}`}>Details</Link>
                </td>
                <td>
                  <Delete id={book.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BooksListPage;
