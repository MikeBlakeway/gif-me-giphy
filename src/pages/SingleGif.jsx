import React from 'react'
import {useParams} from 'react-router-dom'
import {ImageComponent} from '../features/ImageComponent'
import useFetchOnRender from '../hooks/useFetchOnRender'

export const SingleGif = () => {
	const {id} = useParams()
	const imageEndpoint = `https://api.giphy.com/v1/gifs/${id}?api_key=frBBtYTudXylTnbq5jO5taWbE16cMhIb`

	const {data} = useFetchOnRender(imageEndpoint)

	return (
		<section className='text-slate-600 body-font'>
			<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
				<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<div className='grid place-items-center w-full'>
						{data && (
							<div className='card flex flex-col items-center justify-center p-4'>
								<ImageComponent
									className='rounded-full shadow-md w-20'
									srcURI={data.user?.avatar_url}
									altText={data.user?.display_name}
								/>
								<a
									href={data.user?.profile_url}
									className='text-emerald-400 text-3xl font-medium mt-4'
								>
									<p>{data.user?.display_name}</p>
								</a>
								<div className='text-slate-600 mt-4 text-center'>
									<p>{data.user?.description}</p>
								</div>
							</div>
						)}
					</div>
				</div>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
					{data && (
						<div className='relative'>
							<a
								href={data.url}
								className='absolute inset-0 z-10 bg-emerald-400 text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 duration-300 p-3 shadow rounded-tl-[25px] rounded-br-[25px]'
							>
								<ul className='flex flex-col font-semibold text-base text-white'>
									<li>
										<h3 className='text-2xl font-medium'>{data.title}</h3>
									</li>
									<li>width: {data.images.original.width} </li>
									<li>height: {data.images.original.height} </li>
									<li>frames: {data.images.original.frames} </li>
								</ul>
							</a>
							<div className='relative flex content-center'>
								<ImageComponent
									altText={data.title}
									srcURI={data.images.original.url}
									className='w-full aspect-video shadow rounded-tl-[25px] rounded-br-[25px]'
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	)
}

export default SingleGif
