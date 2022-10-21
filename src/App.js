import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Routes from './Routes'

const router = createBrowserRouter(Routes)

const App = () => <RouterProvider router={router} />

export default App
