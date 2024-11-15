import { getUserById } from '@/app/util/api/user.api';

type Props = {
  id: string;
};

const Name: React.FC<Props> = async ({ id }) => {
  const user = await getUserById(id);

  return <div>{user.name}</div>;
};

export default Name;
