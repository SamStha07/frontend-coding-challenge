import Header from 'components/header/header.component';
import ErrorBoundary from 'layout/error-bounday.layout';
import AppRoute from 'pages/app.route';
import { Toaster } from 'react-hot-toast';

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
