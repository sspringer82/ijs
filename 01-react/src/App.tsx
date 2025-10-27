import './App.css';
import { ErrorBoundary } from 'react-error-boundary';
import {
  QueryClient,
  QueryClientProvider,
  useQueryErrorResetBoundary,
} from '@tanstack/react-query';
import List from './List';

const queryClient = new QueryClient();
function App() {
  const { reset } = useQueryErrorResetBoundary();
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            There was an error!
            <button onClick={() => resetErrorBoundary()}>Try again</button>
          </div>
        )}
      >
        <List />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
