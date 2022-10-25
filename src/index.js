import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'

import reportWebVitals from './reportWebVitals'
import './index.css'
import App from './app/App'
import {store} from './app/store/store'

const root = createRoot(document.getElementById('root'))

root.render(
	<StrictMode>
		<Provider store={store()}>
			<App />
		</Provider>
	</StrictMode>
)
reportWebVitals()
