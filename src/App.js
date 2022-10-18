import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Home, NotFound, SingleGif} from './pages'
import {Layout} from './layout'

export const App = () => (
	/**
	 * here we control routing from the entry level component each route returns the appropriate component depending on the path provided.
	 * Where no path is listed, a catch all is provided in path=* which will return a 404 page
	 **/
	<Routes>
		<Route path='/' element={<Layout />}>
			<Route index element={<Home />} />
			<Route exact path='/gif/:id' element={<SingleGif />} />
			<Route path='*' element={<NotFound />} />
		</Route>
	</Routes>
)

export default App
