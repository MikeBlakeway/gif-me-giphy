import React from 'react'
import {Image} from './Image'

const GifGallery = () => {
	return (
		<div className='relative rounded-xl overflow-auto p-8 max-h-[800px]'>
			<div className='relative'>
				<div className='columns-3xs gap-8 space-y-8'>
					<div className='relative aspect-w-16 aspect-h-9'>
						<Image />
						<div className='absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default GifGallery
