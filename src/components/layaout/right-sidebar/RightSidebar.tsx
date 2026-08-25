import { observer } from 'mobx-react-lite/src/observer.js'
import { Lyrics } from './Lyrics'

export const RightSidebar = observer(() => {
	return (
		<div className="bg-bg-secondary px-layout py-0">
			<Lyrics />
		</div>
	)
})
