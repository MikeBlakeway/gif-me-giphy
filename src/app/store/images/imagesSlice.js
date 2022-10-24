import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {fetchGifByQuery} from './fetchGifByQuery'
// First, create the thunk
export const fetchByQuery = createAsyncThunk(
	'images/fetchByQuery',
	async query => {
		const response = await fetchGifByQuery(query)
		return response
	}
)
const initialState = {
	gifs: [],
	status: 'idle',
	error: null,
}

export const imagesSlice = createSlice({
	name: 'images',
	initialState,
	reducers: {
		// standard reducer logic, with auto-generated action types per reducer
	},
	extraReducers(builder) {
		builder
			.addCase(fetchByQuery.pending, (state, action) => {
				state.status = 'loading'
			})
			.addCase(fetchByQuery.fulfilled, (state, action) => {
				state.status = 'succeeded'
				// Add any fetched images to the array
				state.gifs = action.payload
			})
			.addCase(fetchByQuery.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})
export default imagesSlice.reducer
