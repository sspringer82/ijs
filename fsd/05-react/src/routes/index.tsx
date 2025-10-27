import { createFileRoute } from '@tanstack/react-router';
import List from '../List';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <List />
    </div>
  );
}
