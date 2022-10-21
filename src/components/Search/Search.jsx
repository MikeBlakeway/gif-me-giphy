import React, {useState} from 'react'
import ImageGallery from '../ImageGallery/ImageGallery'

const Search = () => {
	/**
	 * We want to keep a brief history of the query text that the user has entered.
	 * This is because we are rendering the search terms conditionally after submission.
	 */
	const [query, setQuery] = useState({
		current: '',
		last: '',
	})

	// this is where will store our api response
	const [searchGifData, setSearchGifData] = useState('')

	// we can dynamically set the url for fetching the searched text by concatenaating it into the url string using backticks
	const searchURI = `https://api.giphy.com/v1/gifs/search?api_key=frBBtYTudXylTnbq5jO5taWbE16cMhIb&q=${query.current}&limit=9&offset=0&rating=g&lang=en`

	/**
	 * Trigger the fetch call on submit, rather than within a useEffect hook as the value of the input changes.
	 * This is to prevent over calling the api.
	 */
	const handleSubmit = e => {
		// prevent the page from refreshing on submit event
		e.preventDefault()
		// pass our dynamic string as the endpoint
		fetch(searchURI)
			.then(response => response.json())
			.then(gifs => setSearchGifData(gifs.data))
			.catch(err => console.log(err))
		// capture the input value to render in the results
		setQuery({last: query.current, current: ''})
	}

	return (
		<>
			<div className='flex w-full pb-12 md:justify-start justify-center items-end'>
				<form method='GET' onSubmit={handleSubmit} className='flex w-full'>
					<input
						type='text'
						id='search-gifs'
						name='search-gifs'
						placeholder='Search over one million gifs'
						value={query.current}
						onChange={e => setQuery({current: e.target.value})}
						className='w-3/4 bg-sky-100 rounded border bg-opacity-80 border-slate-300 focus:bg-transparent text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
					/>

					<span className='w-1/4 bg-emerald-400 flex items-center py-1 px-3'>
						<button
							type='submit'
							className='flex p-2 focus:outline-none focus:shadow-outline'
						>
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								viewBox='0 0 24 24'
								className='w-6 h-6 mr-4 text-white'
							>
								<path d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
							</svg>
							<h3 className='body-font text-white'>Search</h3>
						</button>
					</span>
				</form>
			</div>
			{query.last && (
				<h3 className='title-font text-3xl mb-4 font-medium text-slate-600'>
					Results for
					<span className='text-emerald-400 ml-2'>{query.last}</span>
				</h3>
			)}
			<div className='pb-12'>
				{searchGifData && <ImageGallery imageArray={searchGifData} />}
			</div>
		</>
	)
}

export default Search
