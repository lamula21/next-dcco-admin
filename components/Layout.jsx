import { Nav } from '@/components/Nav'

export const Layout = ({ children }) => {
	return (
		<div className=" bg-slate-800 min-h-screen flex">
			<Nav></Nav>
			<div className="text-black bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
				{children}
			</div>
		</div>
	)
}
