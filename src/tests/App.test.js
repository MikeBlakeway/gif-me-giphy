import {render, screen} from '@testing-library/react'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import App from '../App'

describe('Testing App component', () => {
	it('renders the app component', () => {
		render(<App />, {wrapper: BrowserRouter})

		const searchInput = screen.getByRole('textbox')
		// verify page content for default route
		expect(screen.getByText('GIPHY - Be Animated')).toBeInTheDocument()
		expect(searchInput).toBeInTheDocument()
	})
	it('routes to the 404 page', () => {
		const badRoute = '/some/bad/route'

		// use <MemoryRouter> when you want to manually control the history
		render(
			<MemoryRouter initialEntries={[badRoute]}>
				<App />
			</MemoryRouter>
		)

		// verify navigation to "Not Found" route
		expect(screen.getByText(/404/i)).toBeInTheDocument()
	})
})
