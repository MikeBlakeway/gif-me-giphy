import React from 'react'
import {Brand} from './Brand'
function Header() {
	return (
		<header>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<div className='flex title-font font-medium items-center mb-4 md:mb-0'>
					<Brand />
				</div>
				<nav className='md:ml-auto flex flex-wrap items-center text-base text-emerald-400 justify-center'></nav>
			</div>
		</header>
	)
}

export default Header
