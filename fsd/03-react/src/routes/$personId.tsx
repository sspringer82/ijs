import { createFileRoute } from '@tanstack/react-router';
import { getPersonById } from '../api/persons';
import Detail from '../components/Detail';

export const Route = createFileRoute('/$personId')({
  component: RouteComponent,
  loader: async ({ params }) => {
    return getPersonById(params.personId);
  },
});

function RouteComponent() {
  const person = Route.useLoaderData();
  if (!person) {
    return <div className="p-2">Person not found</div>;
  }
  return <Detail person={person} />;
}
