import {Outlet} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import {fetchTrendingGifs} from '../store/images/fetchTrendingGifs'
import {fetchGifById} from '../store/images/fetchGifById'

export const getTrendingGifs = () => fetchTrendingGifs()
export const getGifById = ({params: {id}}) => fetchGifById(id)

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default Layout
