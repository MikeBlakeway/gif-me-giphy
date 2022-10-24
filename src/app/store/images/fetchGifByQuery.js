export const fetchGifByQuery = async query => {
	const SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&q=${query}&limit=9&offset=0&rating=g&lang=en`

	const data = await fetch(SEARCH_URL)
	return data.json()
}
