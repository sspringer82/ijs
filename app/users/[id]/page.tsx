import { NextPage } from 'next';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const DetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <h1>Detail Page for {id}</h1>
    </div>
  );
};

export default DetailPage;
