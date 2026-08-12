import { MENU_ITEMS , LIBRARY_MENU_ITEMS } from '@/data/menu.data'
import { Menu } from './Menu'

export function LeftSidebar() {
    return (
        <aside>

            <Menu
                items={MENU_ITEMS}
                title="Menu"
            />

            <hr className='my-10 border-player-bg' />

            <Menu
            items={LIBRARY_MENU_ITEMS}
                title="Your Library"
            />

            <hr />

            {/* <Menu
                items={MENU_ITEMS}
                title="Playlists"
            /> */}

        </aside>
    )
}