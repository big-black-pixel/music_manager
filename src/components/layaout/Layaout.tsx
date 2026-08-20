import { AudioPlayer } from '../elements/player/AudioPlayer'
import { LeftSidebar } from './left-sidebar/LeftSidebar'
import { RightSidebar } from './right-sidebar/RightSidebar'

export type { PropsWithChildren } from 'react'
export default function Layaout({ children }: React.PropsWithChildren<unknown>) {

    return (
        <>
        <div className='min-h-screen h-full grid grid-cols-[1fr_4fr_1.5fr]'>

            <LeftSidebar />

            <main className='px-12 py-layout '> {children} </main>

            <RightSidebar />

        </div>

        <AudioPlayer/>

        </>
    )


}