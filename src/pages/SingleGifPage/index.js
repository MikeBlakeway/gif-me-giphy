/* eslint-disable import/no-anonymous-default-export */
import SingleGif from './SingleGifPage'

export default {
	path: '/gif/:id',
	exact: true,
	element: <SingleGif />,
}
