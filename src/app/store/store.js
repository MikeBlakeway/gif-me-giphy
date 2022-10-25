import {configureStore, combineReducers} from '@reduxjs/toolkit'
import imageReducer from './images/imagesSlice'

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
	images: imageReducer,
})
export const store = preloadedState => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	})
}
