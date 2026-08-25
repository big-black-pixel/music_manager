import { NuqsAdapter } from 'nuqs/adapters/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Layout from './components/layaout/Layaout.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<NuqsAdapter>
			<Layout>
				<App />
			</Layout>
		</NuqsAdapter>
	</StrictMode>
)
