import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Errorpage from './Components/ErrorPage/Errorpage';
import BookDetail from './Components/BookDetail/BookDetail';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path: '/',
        loader: ()=> fetch('../Books.json'),
        element: <Home></Home>
      },
      {
        path: '/book/:bookid',
        element: <BookDetail></BookDetail>,
        loader: () => fetch('../Books.json')
      },
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('../Books.json')
      },
      {
        path: '/pages',
        element: <PagesToRead></PagesToRead>,
        loader: ()=> fetch('../Books.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
