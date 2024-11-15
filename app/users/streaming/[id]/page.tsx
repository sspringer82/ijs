// /users/streaming/42

import { NextPage } from 'next';
import Name from './Name';
import { Suspense } from 'react';
import Email from './Email';

type Props = {
  params: Promise<{ id: string }>;
};

const StreamingPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;

  return (
    <div>
      <h1>Streaming </h1>
      <hr />
      <Suspense fallback={<div>Loading the name...</div>}>
        <Name id={id} />
      </Suspense>
      <Suspense fallback={<div>Loading the name...</div>}>
        <Email id={id} />
      </Suspense>
    </div>
  );
};

export default StreamingPage;
