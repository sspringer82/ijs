import { getUserById } from '@/app/util/api/user.api';
import { NextPage } from 'next';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const DetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  const user = await getUserById(id);
  return (
    <div>
      <h1>Detail Page for {user.name}</h1>
    </div>
  );
};

export default DetailPage;

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '3' }];
}
