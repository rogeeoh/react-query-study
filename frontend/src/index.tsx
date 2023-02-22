import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {QueryClient, QueryClientProvider} from "react-query";
// react-query devtools
import {ReactQueryDevtools} from "react-query/devtools";
import {BrowserRouter} from "react-router-dom";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App/>
        <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
