'use client';

import { createUser } from '@/app/actions/user';
import { NextPage } from 'next';
import { useActionState } from 'react';

const UsersFormPage: NextPage = () => {
  const [error, submitAction, isPending] = useActionState<string, FormData>(
    createUser,
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
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" className="text-black" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" className="text-black" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UsersFormPage;
