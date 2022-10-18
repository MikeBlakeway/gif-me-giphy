import React from 'react'
import {GalleryImage} from './GalleryImage'

export const ImageGallery = ({imageArray}) => {
	return (
		<div className='columns-3 gap-0'>
			{
				/**
				 * we iterate over the array of images via
				 * the 'map' array method. For each object in
				 *  the array, we pass its values into a
				 * child GalleryImage component
				 */
				imageArray.map(meta => (
					// each child component must hold a unique key value.
					<GalleryImage key={meta.id} meta={meta} />
				))
			}
		</div>
	)
}
