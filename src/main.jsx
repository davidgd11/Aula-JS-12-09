import React, { } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './components/Error.jsx'
import Home from './components/Home.jsx'
import Produtos from './components/Produtos.jsx'
import Exemplo1 from './components/Exemplo1.jsx'

/*Criando o metodo que vai executar as rotas*/ 

const router = createBrowserRouter([
  {
  /*caminho do elemento pai */
  path: '/', element: <App />,
  errorElement: <Error />,

  /*chamando os elementos filhos */
  children: [

    {
      path: "/", element: <Home />
    },
    {
      path: "/produtos", element: <Produtos />
    },
    {
      path: "/exemplo1", element: <Exemplo1 />
    },
  ]
  }

])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
