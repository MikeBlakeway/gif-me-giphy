import React from 'react'
import {ImageComponent} from './ImageComponent'

export const GalleryImage = ({meta}) => {
	// object destructuring allows us to keep values on the object as named variables
	const {images, id, title} = meta
	return (
		<div className='relative'>
			<a
				href={`/gif/${id}`}
				className='absolute inset-0 z-10 bg-emerald-400 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-300 p-3'
			>
				<h4 className='tracking-wider font-semibold text-lg text-white'>{title}</h4>
			</a>
			<div className='relative flex content-center'>
				<ImageComponent
					altText={title}
					srcURI={images.fixed_width.url}
					className='w-full aspect-video'
				/>
			</div>
		</div>
	)
}
