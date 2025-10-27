'use client';

import { deleteAction } from '@/actions/delete.action';

type Props = {
  id: string;
};

const DeleteButton: React.FC<Props> = ({ id }) => {
  return <button onClick={() => deleteAction(id)}>Delete</button>;
};

export default DeleteButton;
