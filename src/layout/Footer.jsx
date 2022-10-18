import React from 'react'
import Brand from './Brand'
import Social from '../assets/svg/Social'

function Footer() {
	return (
		<footer className='text-gray-600 body-font'>
			<div className='container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col'>
				<Brand />
				<p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
					© {new Date().getFullYear()} GifMeGIPHY
				</p>
				<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
					<a href='/' className='text-gray-500'>
						<Social.Facebook />
					</a>
					<a href='/' className='ml-3 text-gray-500'>
						<Social.Twitter />
					</a>
					<a href='/' className='ml-3 text-gray-500'>
						<Social.Instagram />
					</a>
					<a href='/' className='ml-3 text-gray-500'>
						<Social.Linkdin />
					</a>
				</span>
			</div>
		</footer>
	)
}

export default Footer
