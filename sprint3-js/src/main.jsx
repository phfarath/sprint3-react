import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './componentes/Error.jsx';
import Home from './componentes/Home.jsx';
import Publicacoes from './componentes/Publicacoes.jsx';
import Login from './componentes/Login.jsx';


const router = createBrowserRouter([
  {
    /* chamando o elemento principal(pai) */
    path: '/',
    element: <App />,
    /*  chamando o elemento de erro*/
    errorElement: <Error />,

    /* chamando elementos filhos */
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/publicacoes', element: <Publicacoes /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*chamando a função que será renderizada */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
