import React from 'react'
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom'

import {Home, GifById, ErrorPage} from './pages'
import Layout, {getTrendingGifs, getGifById} from './pages/Layout'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			id='root'
			loader={getTrendingGifs}
			element={<Layout />}
			path='/'
			errorElement={<ErrorPage />}
		>
			<Route element={<Home />} exact path='/' />
			<Route element={<GifById />} path='gif/:id' loader={getGifById} />
		</Route>
	)
)

const App = () => <RouterProvider router={router} />

export default App
