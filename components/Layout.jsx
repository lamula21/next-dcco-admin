import { Nav2 } from './Nav2'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export const Layout = ({ children, userName }) => {
	const [activeSidebar, SetActiveSidebar] = useState(true)

	return (
		<div className="relative w-full h-full">
			<Nav2
				userName={userName}
				activeSidebar={activeSidebar}
				SetActiveSidebar={SetActiveSidebar}
			></Nav2>

			<div
				className={cn(
					'home_content text-black bg-white absolute w-custom left-[78px] h-full z-0 p-10',
					activeSidebar ? 'active w-custom2 left-[240px]' : ''
				)}
			>
				<div className="flex-1 space-y-4 pb-10">{children}</div>
			</div>
		</div>
	)
}
