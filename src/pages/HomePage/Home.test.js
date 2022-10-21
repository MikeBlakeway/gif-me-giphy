import React from 'react'
import {render, screen} from '@testing-library/react'
import HomePage from './HomePage'
import {giphyResponse} from '../../../mock/giphy-search.response'

// setup a DOM element as a render target
let container

beforeEach(() => {
	container = document.createElement('div')
	document.body.appendChild(container)
})

afterEach(() => {
	document.body.removeChild(container)
	container = null
})

const mockResolved = {
	data: giphyResponse,
	loading: false,
	error: '',
}

it('renders HomePage', async () => {
	//  set mock data for fetch responses
	jest.spyOn(global, 'fetch').mockImplementation(() =>
		Promise.resolve({
			json: () => Promise.resolve(mockResolved),
		})
	)

	await render(<HomePage />)

	// find a gif image that has been rendered
	const gifImageTitle = await screen.findByText('Scared Dog GIF')

	// Assertgif image exists
	expect(gifImageTitle).toBeInTheDocument()

	// remove the mock to ensure tests are completely isolated
	global.fetch.mockRestore()
})
