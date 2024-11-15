'use client';

import { deleteUser } from '@/app/actions/user';

type Props = {
  id: string;
};

const Delete: React.FC<Props> = ({ id }) => {
  return (
    <button
      onClick={() => {
        deleteUser(id);
      }}
    >
      DELETE
    </button>
  );
};

export default Delete;
