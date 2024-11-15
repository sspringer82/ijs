import { getUserById } from '@/app/util/api/user.api';
import { wait } from '@/app/util/wait';

type Props = {
  id: string;
};

const Email: React.FC<Props> = async ({ id }) => {
  await wait(5_000);
  const user = await getUserById(id);

  return <div>{user.email}</div>;
};

export default Email;
