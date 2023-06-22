import React from "react";
import { hot } from "react-hot-loader/root";
import { Content } from "./shared/Content/Content";
import { Layout } from "./shared/Layout";
import { NoFound } from "./shared/NoFound";
import { CardsListContainer } from "./shared/CardsListContainer";
import './main.global.css';

import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { observer } from "mobx-react-lite";
import { myTokenStore } from "./storeMobX/token";

const AppComponent = observer(() => {
  const token = localStorage.getItem('token') || window.__token__
  myTokenStore.updateToken(token)
  if (token && token !== 'undefined') {
    localStorage.setItem("token", token);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Navigate to={'/posts/'} />} />
          <Route path='/auth' element={<Navigate to={'/posts/'} />} />
          <Route path='/' element={<Content />} >
            <Route path='/posts/*' element={<CardsListContainer />} />
          </Route>
        </Route>
        <Route path='*' element={<NoFound />} />
      </>
    )
  )

  return (
    <RouterProvider router={router} />
  );
})

export const App = hot(() => (
  <AppComponent />
));
