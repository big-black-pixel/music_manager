export type { PropsWithChildren } from 'react'
export default function Layaout({ children }: React.PropsWithChildren<unknown>) {
    return <div>


        <Sidebar />

        <main>

            {children}

        </main>

        <RightSidebar />

    </div>

}