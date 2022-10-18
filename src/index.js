import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './styles/index.css'
import App from './App'
import reportWebVitals from './utils/reportWebVitals'

const root = createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
)
reportWebVitals()
