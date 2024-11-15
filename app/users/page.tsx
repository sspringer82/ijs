import { NextPage } from 'next';
import { getAllUsers } from '../util/api/user.api';
import { User } from '../util/types/user';
import { errorExtractor } from '../util/errorExtractor';
import Link from 'next/link';
import Delete from './components/delete';
import Button from '@/components/Button';
import { deleteUser } from '../actions/user';

const UsersPage: NextPage = async () => {
  let users: User[] = [];
  let errorMessage = '';
  try {
    users = await getAllUsers();
  } catch (error) {
    errorMessage = errorExtractor(error);
  }

  async function doIt(id: string) {
    'use server';
  }

  return (
    <div>
      <h1>User List</h1>
      {errorMessage && <p>{errorMessage}</p>}
      {users.length === 0 && <p>No users available</p>}
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name}{' '}
              <Link href={`/users/${user.id}`} prefetch={false}>
                Details
              </Link>
              <Button title="delete" id={user.id} handleClick={deleteUser} />
            </li>
          ))}
        </ul>
      )}

      <Link href="/users/form">create</Link>
    </div>
  );
};

export default UsersPage;
