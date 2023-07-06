import { Nav } from '@/components/Nav'
import { Nav2 } from './Nav2'
import { useState } from 'react'

export const Layout = ({ children }) => {
	// const [activeSidebar, SetActiveSidebar] = useState(false)

	return (
		<div className="relative w-full h-full">
			<Nav2></Nav2>
			{/* Add line 257. Somehow use the state from Nav2 when activeSidebar */}
			<div className="text-black bg-white absolute w-custom left-[78px] transition-all duration-500 ease-in-out">
				{children}
			</div>
		</div>
	)
}
