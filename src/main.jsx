import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import App from './App'
import ErrorPage from './ErrorPage'
import Footer from './Footer'
import Header from './Header'



const site = import.meta.env.BASE_URL

//not much changed here, essentially just setting the background image to be static to the site, 
//that way nothing changes post viewplate change. contains an unused header and a used footer. 

function Layout() {
  return (
      <>
        <section className='Hero'>
          <Header />
            <div id='page-content'>
              <Outlet />
            </div>
          <Footer />
        </section>
      </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      
    ]
  }
], {
  basename: site
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
