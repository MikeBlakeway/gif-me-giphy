import React from 'react'
import ErrorSafeImage from '../ErrorSafeImage/ErrorSafeImage'

const Hero = ({title, prose, imageURI}) => {
	return (
		<section className='text-slate-600 body-font'>
			<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
				<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-600 capitalize'>
						{title}
					</h1>
					<p className='mb-8 leading-relaxed'>{prose}</p>
				</div>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
					<ErrorSafeImage
						className='shadow rounded-tl-[25px] rounded-br-[25px]'
						altText={title}
						srcURI={imageURI}
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
