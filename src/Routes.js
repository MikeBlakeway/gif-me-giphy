import {Outlet} from 'react-router-dom'

import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import SingleGifPage from './pages/SingleGifPage'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

const Routes = [
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [HomePage, SingleGifPage],
	},
]

export default Routes
