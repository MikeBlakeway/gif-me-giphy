export const fetchGifById = async id => {
	const BY_ID_URL = `https://api.giphy.com/v1/gifs/${id}?api_key=${process.env.REACT_APP_GIPHY_API_KEY}`

	const data = await fetch(BY_ID_URL)
	return data
}
