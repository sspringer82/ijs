import { getAllPersons, getPersonById } from '@/api/persons';
import Detail from '@/components/Detail';
import { NextPage } from 'next';

type Props = {
  params: Promise<{
    personId: string;
  }>;
};

const PersonPage: NextPage<Props> = async ({ params }) => {
  const { personId } = await params;
  const person = await getPersonById(personId);

  if (person === null) {
    return <p>Person not found.</p>;
  } else {
    return <Detail person={person!} />;
  }
};
export default PersonPage;

export async function generateStaticParams() {
  const persons = await getAllPersons();

  return persons.map((person) => ({
    personId: person.id,
  }));
}
