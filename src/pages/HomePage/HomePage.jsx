import React from 'react'
import useFetchOnRender from '../../hooks/useFetchOnRender'

import Hero from '../../components/Hero/Hero'
import Search from '../../components/Search/Search'
import ImageGallery from '../../components/ImageGallery/ImageGallery'

export const HomePage = () => {
	// we are listing a standard url for fetching trending gifs from GiphyAPI
	const trendingGifURI =
		'https://api.giphy.com/v1/gifs/trending?api_key=frBBtYTudXylTnbq5jO5taWbE16cMhIb&limit=9&rating=g'

	/**
	 * This is a custom hook that allows a component to fetch data as soon
	 * as it renders. We can destructure the data returned and use it
	 * accordingly without needlessly bloating the component and potentially
	 * repeating a common requirement.
	 */
	const {data} = useFetchOnRender(trendingGifURI)

	return (
		/**
		 * this empty element tag is shorthand for React.Fragment.
		 * It allows us to render components to the dom without
		 * strictly wrapping it in a single <div> or other such element.
		 **/
		<>
			<Hero
				title='GIPHY - Be Animated'
				prose='GIPHY is your top source for the best & newest GIFs & Animated Stickers online. Find everything from funny GIFs, reaction GIFs, unique GIFs and more.'
				imageURI={data && data[0].images.original.url}
			/>
			<section className='container p-5 mx-auto'>
				<Search />
				<h3 className='title-font sm:text-3xl text-2xl mb-4 font-medium text-slate-600 capitalize'>
					Trending Gifs
				</h3>
				{/**
				 *  We do not weant to render this component
				 *  until our data has been returned.
				 **/}
				{data && <ImageGallery imageArray={data} />}
			</section>
		</>
	)
}

export default HomePage
