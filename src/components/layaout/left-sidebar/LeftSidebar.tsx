import { MENU_ITEMS, LIBRARY_MENU_ITEMS } from '@/data/menu.data'
import { Menu } from './Menu'

export function LeftSidebar() {
    return (
        <aside className='px-layout border-r border-player-bg h-full py-10' >

            <Menu
                items={MENU_ITEMS}
                title="Menu"
            />

            <hr className='my-8 border-player-bg' />

            <Menu
                items={LIBRARY_MENU_ITEMS}
                title="Your Library"
            />

            <hr className='my-8 border-player-bg' /> 

            {/* NODO: Add playlists */}

            <Menu
                items={[]}
                title="Playlists"
            />

        </aside>
    )
}