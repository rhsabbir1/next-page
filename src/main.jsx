import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Books from './components/Books'
import BooksDetails from './components/BooksDetails'
import Error from './components/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element : <App></App>,
    errorElement:<Error></Error>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path:'about',
        element : <About></About>
      },
      {
        path:'books',
        element : <Books></Books>,
        loader : () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path:'book/:id',
        element : <BooksDetails></BooksDetails>,
        loader : ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)
      }
    ]
    
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
