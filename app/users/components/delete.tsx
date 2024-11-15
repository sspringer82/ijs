'use client';

import { deleteUser } from '@/app/actions/user';
import { useRouter } from 'next/navigation';

type Props = {
  id: string;
};

const Delete: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        deleteUser(id);
        router.refresh();
      }}
    >
      DELETE
    </button>
  );
};

export default Delete;
