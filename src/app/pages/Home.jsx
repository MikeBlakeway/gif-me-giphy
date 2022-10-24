import React from 'react'
import {useRouteLoaderData} from 'react-router-dom'

import Hero from '../components/Hero/Hero'
import Search from '../features/Search/Search'
import ImageGallery from '../features/ImageGallery/ImageGallery'

const Home = () => {
	const {data: trending} = useRouteLoaderData('root')

	return (
		<>
			<Hero
				title='GIPHY - Be Animated'
				prose='GIPHY is your top source for the best & newest GIFs & Animated Stickers online. Find everything from funny GIFs, reaction GIFs, unique GIFs and more.'
				imageURI={trending[0].images.original.url}
			/>
			<section className='container p-5 mx-auto'>
				<Search />
				<h3 className='title-font sm:text-3xl text-2xl mb-4 font-medium text-slate-600 capitalize'>
					Trending Gifs
				</h3>
				<ImageGallery imageArray={trending} />
			</section>
		</>
	)
}

export default Home
