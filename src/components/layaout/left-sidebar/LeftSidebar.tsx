import { LIBRARY_MENU_ITEMS, MENU_ITEMS } from '@/data/menu.data'
import { Menu } from './Menu'
import { SidebarPlaylists } from './SidebarPlaylists'
import { observer } from 'mobx-react-lite/src/observer.js'

export const LeftSidebar = observer(() => {
	return (
		<aside className="px-layout border-r border-player-bg h-full py-9">
			<Menu items={MENU_ITEMS} />

			<hr className="my-8 border-player-bg" />

			<Menu
				items={LIBRARY_MENU_ITEMS}
				title="Your Library"
			/>

			<hr className="my-8 border-player-bg" />

			<SidebarPlaylists />
		</aside>
	)
})
