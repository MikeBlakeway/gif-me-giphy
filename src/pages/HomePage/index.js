/* eslint-disable import/no-anonymous-default-export */
import HomePage from './HomePage'
import ErrorPage from '../ErrorPage/ErrorPage'

export default {
	path: '/',
	exact: true,
	element: <HomePage />,
	errorElement: <ErrorPage />,
}
