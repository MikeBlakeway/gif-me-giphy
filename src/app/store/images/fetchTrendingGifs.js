export const fetchTrendingGifs = async () => {
	return fetch(
		`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=9&rating=g`
	)
}
