import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { LandingPage, BookTablePage } from '../pages';
import { Footer, Navigation } from "../components";


const GuestUserRoute = ({page}) => {
  return (
    <div  className='min-h-screen grid content-between'>
      <header>
        <Navigation></Navigation>
      </header>
      <main className="max-w-7xl px-5 grid mx-auto">
        {page}
      </main>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestUserRoute page={<LandingPage />}></GuestUserRoute>
  },
  {
    path: "/book",
    element:  <GuestUserRoute page={<BookTablePage />}></GuestUserRoute>
  },
]);

export const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  );
};

