import {
  useQueryErrorResetBoundary,
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ErrorBoundary } from 'react-error-boundary';

const queryClient = new QueryClient();

const RootLayout = () => {
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
        <Outlet />
        <TanStackRouterDevtools />
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export const Route = createRootRoute({ component: RootLayout });
