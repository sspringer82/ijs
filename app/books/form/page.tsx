'use client';

import { createBook } from '@/app/actions/book';
import { NextPage } from 'next';
import { useActionState } from 'react';

const UsersFormPage: NextPage = () => {
  const [error, submitAction, isPending] = useActionState<string, FormData>(
    createBook,
    ''
  );

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <form action={submitAction}>
      <div>
        <label htmlFor="isbn">ISBN</label>
        <input type="text" id="isbn" name="isbn" className="text-black" />
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          className="text-black"
          required
        />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" className="text-black" />
      </div>
      <div>
        <label htmlFor="pages">Pages</label>
        <input type="number" id="pages" name="pages" className="text-black" />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <input
          type="text"
          id="language"
          name="language"
          className="text-black"
        />
      </div>
      <div>
        <label htmlFor="rating">Rating</label>
        <input type="number" id="rating" name="rating" className="text-black" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UsersFormPage;
