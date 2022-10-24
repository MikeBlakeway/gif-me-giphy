import {configureStore} from '@reduxjs/toolkit'
import imageReducer from './images/imagesSlice'

export const store = configureStore({
	reducer: {
		images: imageReducer,
	},
})
