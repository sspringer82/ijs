import { getBookById } from '@/app/util/api/book';
import { NextPage } from 'next';
import Link from 'next/link';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const BooksDetailPage: NextPage<Props> = async ({ params }) => {
  const { id } = await params;
  const book = await getBookById(id);
  return (
    <div>
      <h1>Detail Page for {book.title}</h1>

      <Link href="/books">Back to list</Link>
    </div>
  );
};

export default BooksDetailPage;
