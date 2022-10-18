import {useEffect, useState} from 'react'

/**
 * A custom hook that fetches data asynchronously from the provided endpoint. It tracks the 'loading' status of the data fetch, as well as any error that may occur.
 */
export const useFetchOnRender = (url = null) => {
	// we are tracking state here via the useState hook
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	// the useEffect hook will run on initial render and allows us perform side effects like data fetching or manually changing the DOM
	useEffect(() => {
		// if no url is provided then exit the function
		if (!url) return

		/**
		 * The AbortController:
		 * a simple object that generates an abort event on its signal property when the abort() method is called
		 * We do this to avoid additional calls to the api when using SrictMode.
		 */
		const controller = new AbortController()

		/**
		 * We must write asynchronous code within the useEffect call itself, as the first argument of useEffect should be a function that returns either nothing (undefined) or another function (to clean up side effects).
		 * Async returns a Promise, which can't be called as a function and is thus invalid as a first argument.
		 */
		const fetchData = async () => {
			// set loading to true as our call is initiated
			setLoading(true)

			// try catch allows us to handle any errors that may be returned, as well as handle data manipulation cleanly
			try {
				// fetch our endpoint, connecting it to our abort controller signal as a second optional parameter (expected within the global fetch method)
				const response = await fetch(url, {signal: controller.signal})
				// convert the response to a json object
				const json = await response.json()

				// apply the returned data to local state
				setData(json)
				// catch any errors
			} catch (e) {
				setError(e)
			}

			// if we have reached this far then the call is complete and we can reset our loading status to false
			setLoading(false)
		}

		// call our fetchData function
		fetchData()
		return () => {
			controller.abort()
		}
	}, [url]) // contents in this array will cause a re-render if their values change

	// finally we return ourt three state values enclosed in an object
	return {...data, error, loading}
}

export default useFetchOnRender
