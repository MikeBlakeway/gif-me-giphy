import React from 'react'
import ErrorSafeImage from '../ErrorSafeImage/ErrorSafeImage'

const ImageGallery = ({imageArray}) => {
	return (
		<div className='columns-3 gap-0'>
			{
				/**
				 * we iterate over the array of images via
				 * the 'map' array method. For each object in
				 *  the array, we pass its values into a
				 * child GalleryImage component
				 */
				imageArray.map(({images, id, title}) => (
					// each child component must hold a unique key value.
					<div className='relative' key={id}>
						<a
							href={`/gif/${id}`}
							className='absolute inset-0 z-10 bg-emerald-400 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-300 p-3'
						>
							<h4 className='tracking-wider font-semibold text-lg text-white'>
								{title}
							</h4>
						</a>
						<div className='relative flex content-center'>
							<ErrorSafeImage
								altText={title}
								srcURI={images.fixed_width.url}
								className='w-full aspect-video'
							/>
						</div>
					</div>
				))
			}
		</div>
	)
}

export default ImageGallery
