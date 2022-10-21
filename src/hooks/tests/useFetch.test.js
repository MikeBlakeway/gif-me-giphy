import {renderHook} from '@testing-library/react-hooks'
import useFetchOnRender from '../useFetchOnRender'

// cleanup any global fetch mocks after each and all tests
afterEach(() => {
	global.fetch.mockClear()
})

afterAll(() => {
	global.fetch.mockRestore()
})

//  set mock data for fetch responses
const mockResolved = {
	data: [],
	loading: false,
	error: '',
}

describe('useFetch', () => {
	it('should update loading to true whilst resolving json', async () => {
		// Mock global fetch implementation
		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockResolved),
			})
		)
		// Execute
		const {result, waitForNextUpdate} = renderHook(() =>
			useFetchOnRender('/some-endpoint')
		)

		// Assert whilst resolving promise
		expect(result.current.data).not.toBeDefined()
		expect(result.current.loading).toBeTruthy()
		expect(result.current.error).toBeNull()
		// resolve json promise
		await waitForNextUpdate()
	})
	it('should return data after fetch', async () => {
		// Mock global fetch implementation
		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.resolve(mockResolved),
			})
		)
		// Execute
		const {result, waitForNextUpdate} = renderHook(() =>
			useFetchOnRender('/some-endpoint')
		)

		// Assert whilst resolving promise
		expect(result.current.data).not.toBeDefined()
		expect(result.current.loading).toBeTruthy()
		expect(result.current.error).toBeNull()

		// resolve json promise
		await waitForNextUpdate()

		// Assert promise resolved
		expect(result.current.data).toStrictEqual([])
		expect(result.current.loading).toBeFalsy()
		expect(result.current.error).toBeNull()
	})

	it('should catch error', async () => {
		jest.spyOn(global, 'fetch').mockImplementation(() =>
			Promise.resolve({
				json: () => Promise.reject('oops, error occured!'),
			})
		)

		const {result, waitForNextUpdate} = renderHook(() =>
			useFetchOnRender('/bad-endpoint')
		)

		// resolve json promise
		await waitForNextUpdate()

		// Assert promise resolved
		expect(result.current.data).not.toBeDefined()
		expect(result.current.loading).toBeFalsy()
		expect(result.current.error).toStrictEqual('oops, error occured!')
	})
})
