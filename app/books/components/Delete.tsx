'use client';

import { deleteBook } from '@/app/actions/book';

type Props = {
  id: string;
};

const Delete: React.FC<Props> = ({ id }) => {
  return <button onClick={() => deleteBook(id)}>DELETE</button>;
};

export default Delete;
