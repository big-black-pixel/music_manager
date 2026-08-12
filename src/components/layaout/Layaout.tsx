import { LeftSidebar } from './left-sidebar/LeftSidebar'
import { RightSidebar } from './right-sidebar/RightSidebar'

export type { PropsWithChildren } from 'react'
export default function Layaout({ children }: React.PropsWithChildren<unknown>) {

    return (
        <div className='h-full grid grid-cols-[1fr_3.5fr_1.2fr]'>

            <LeftSidebar />

            <main className='py-6 px-4 '> {children} </main>

            <RightSidebar />

        </div>
    )


}