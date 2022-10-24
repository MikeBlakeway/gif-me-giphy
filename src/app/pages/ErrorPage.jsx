import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
	return (
		<main className='h-screen w-full flex flex-col justify-center items-center'>
			<h1 className='text-9xl font-extrabold text-yellow-300 tracking-widest'>
				404
			</h1>
			<div className='bg-emerald-400 text-white px-3 py-1 mb-8 text-base font-bold rounded rotate-12 absolute'>
				Page Not Found
			</div>
			<Link
				to='/'
				className='bg-emerald-400 flex items-center text-white rounded font-bold mt-5 py-3 px-8 focus:outline-none focus:shadow-outline hover:drop-shadow-lg ease-in-out duration-200 hover:bg-emerald-500'
			>
				Return Home
			</Link>
		</main>
	)
}

export default ErrorPage
