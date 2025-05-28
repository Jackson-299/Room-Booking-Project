import ReactDOM from 'react-dom/client';

import { seedLocalDatabase } from '@/api/data/seed';
import ThemeProvider from '@/components/ThemeProvider';
import UseRefHookOne from '@/components/UseRefHookOne';
import App from './App';

import './index.css';
import Router from './Router';

// DO NOT REMOVE: Seeds the local storage database with data
seedLocalDatabase();

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    {/* <App /> */}
    {/* <UseRefHookOne/> */}
    <Router />
  </ThemeProvider>,
);


