import Header from 'components/header/header.component';
import ErrorBoundary from 'layout/error-bounday.layout';
import { Toaster } from 'react-hot-toast';
import AppRoute from 'routes/app.route';

function App() {
  return (
    <ErrorBoundary>
      <Header />
      <AppRoute />
      <Toaster />
    </ErrorBoundary>
  );
}

export default App;
