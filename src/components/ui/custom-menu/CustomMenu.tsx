import cn from 'clsx'
import { observer } from 'mobx-react-lite/src/observer.js'
import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	side?: 'left' | 'right'
}

export const CustomMenu = observer(({ children, side }: Props) =>{
	return (
		<div
			className={cn(
				'w-48 fade-in bg-[#2B2B30] p-1 rounded-md absolute z-10',
				side === 'left'
					? 'left-0'
					: side === 'right'
					? 'right-0'
					: 'left-1/2 -translate-x-1/2'
			)}
			style={{ top: 'calc(100% + 0.5rem)' }}
		>
			{children}
		</div>
	)
})
