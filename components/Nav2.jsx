import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { cn } from '@/lib/utils'

import { MembershipIcon } from './Icons/MembershipIcon'
import { SignOutButton, UserButton } from '@clerk/nextjs'

export const Nav2 = () => {
	const tooltip =
		'tooltip absolute left-[122px] top-0 translate-y-[-50%] translate-x-[-50%] rounded-[6px] h-[35px] w-[122px] bg-white leading-[35px] text-center shadow-custom transition-all duration-0 opacity-0 pointer-events-none block'

	const a =
		' text-white flex items-center no-underline transition-all duration-500 ease-in rounded-xl whitespace-nowrap hover:text-[#11101d] hover:bg-white'

	const i = ' h-[50px] min-w-[50px] rounded-xl leading-[50px] text-center'
	const linksName =
		'links_name opacity-0 pointer-events-none transition-all duration-500 ease-in'

	const [activeSidebar, SetActiveSidebar] = useState(false)
	const inactiveLink = 'flex gap-1 p-1'
	const activeLink = inactiveLink + ' bg-white text-blue-900 rounded-l-lg'
	const router = useRouter()
	const { pathname } = router

	const toggleSidebar = (state) => {
		if (state === true) {
			SetActiveSidebar(true)
		} else if (state === false) {
			SetActiveSidebar(false)
		} else {
			SetActiveSidebar(!activeSidebar)
		}
	}

	return (
		// add .sidebar.active => line 28
		<aside
			className={cn(
				'sidebar fixed top-0 left-0 h-full w-[78px] bg-[#11101d] py-1.5 px-3.5 transition-all duration-500 ease-in',
				activeSidebar ? 'active w-[240px] rounded-tr-[12px]' : ''
			)}
			onClick={(e) => toggleSidebar(true)}
		>
			<div className="logo_content">
				{/* add .sidebar.active .logo_content .logo => line 43 when activeSidebar */}
				<Link
					href={'/'}
					className={cn(
						'logo text-white flex h-[50px] w-full items-center opacity-0 pointer-events-none transition-all duration-500 ease-in',
						activeSidebar ? 'active opacity-100 pointer-events-none' : ''
					)}
				>
					<i className="bx bxl-c-plus-plus text-[28px] font-normal"></i>
					<div className="logo_name text-[20px] font-normal whitespace-nowrap">
						DCCO Admin
					</div>
				</Link>
				{/* add .sidebar.active #btn => line 70 when activeSidebar */}
				<i
					className={cn(
						'bx bx-menu absolute text-white top-[6px] left-[50%] text-[20px] h-[50px] w-[50px] text-center leading-[50px] translate-x-[-50%]',
						activeSidebar ? 'active left-[90%]' : ''
					)}
					id="btn"
					onClick={(e) => {
						// prevents parent event listener to be executed
						e.stopPropagation()
						toggleSidebar('toggle')
					}}
				></i>
			</div>

			<ul className="nav_list mt-5">
				<li className="relative h-[50px] w-full my-0 ml-[5px] list-none leading-[50px]">
					<i
						className={
							'bx bx-search absolute z-[99] text-white text-[22px] transition-all duration-500 ease-in hover:bg-white hover:text-[#1d1b31]' +
							i
						}
						onClick={(e) => {
							e.stopPropagation()
							toggleSidebar('toggle')
						}}
					></i>

					<input
						className="absolute h-full w-full left-0 top-0 rounded-[12px] outline-none border-none bg-[#1d1b31] pl-[50px] text-[18px] text-white m-0 p-0 box-border"
						type="text"
						placeholder="Search..."
					/>

					{/* add .sidebar.active ul li .tooltip => line 102 when activeSidebar. Same for the rest */}
					<span className={cn(tooltip, activeSidebar ? 'active hidden' : '')}>
						Search
					</span>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/'} className={a}>
						<i className={'bx bx-grid-alt' + i}></i>
						{/* add .sidebar.active .links_name => line 164 when activeSidebar. Same for rest */}
						<span
							className={cn(
								linksName,
								activeSidebar ? 'active opacity-100 pointer-events-auto' : ''
							)}
						>
							Dashboard
						</span>
					</Link>

					<span className={cn(tooltip, activeSidebar ? 'active hidden' : '')}>
						Dashboard
					</span>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/user'} className={a}>
						<i className={'bx bx-shopping-bag' + i}></i>
						<span
							className={cn(
								linksName,
								activeSidebar ? 'active opacity-100 pointer-events-auto' : ''
							)}
						>
							Products
						</span>
					</Link>
					<span className={cn(tooltip, activeSidebar ? 'active hidden' : '')}>
						Products
					</span>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/post'} className={a}>
						<i className={'bx bx-message-square-edit' + i}></i>
						<span
							className={cn(
								linksName,
								activeSidebar ? 'active opacity-100 pointer-events-auto' : ''
							)}
						>
							Posts
						</span>
					</Link>
					<span className={cn(tooltip, activeSidebar ? 'active hidden' : '')}>
						Posts
					</span>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/post'} className={a}>
						<i className={'bx bx-calendar' + i}></i>
						<span
							className={cn(
								linksName,
								activeSidebar ? 'active opacity-100 pointer-events-auto' : ''
							)}
						>
							Events
						</span>
					</Link>
					<span className={cn(tooltip, activeSidebar ? 'active hidden' : '')}>
						Events
					</span>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/message'} className={a}>
						<i className={'bx bx-paper-plane' + i}></i>
						<span
							className={cn(
								linksName,
								activeSidebar ? 'active opacity-100 pointer-events-auto' : ''
							)}
						>
							Messages
						</span>
					</Link>
					<span className={cn(tooltip, activeSidebar ? 'active hidden' : '')}>
						Messages
					</span>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/membership'} className={a}>
						<MembershipIcon />
						<span
							className={cn(
								linksName,
								activeSidebar ? 'active opacity-100 pointer-events-auto' : ''
							)}
						>
							Memberships
						</span>
					</Link>
					<span className={cn(tooltip, activeSidebar ? 'active hidden' : '')}>
						Memberships
					</span>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/user'} className={a}>
						<i className={'bx bx-user' + i}></i>
						<span
							className={cn(
								linksName,
								activeSidebar ? 'active opacity-100 pointer-events-auto' : ''
							)}
						>
							User
						</span>
					</Link>
					<span className={cn(tooltip, activeSidebar ? 'active hidden' : '')}>
						User
					</span>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/page'} className={a}>
						<i className={'bx bx-code-alt' + i}></i>
						<span
							className={cn(
								linksName,
								activeSidebar ? 'active opacity-100 pointer-events-auto' : ''
							)}
						>
							Pages
						</span>
					</Link>
					<span className={cn(tooltip, activeSidebar ? 'active hidden' : '')}>
						Pages
					</span>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/order'} className={a}>
						<i className={'bx bx-cart-alt' + i}></i>
						<span
							className={cn(
								linksName,
								activeSidebar ? 'active opacity-100 pointer-events-auto' : ''
							)}
						>
							Orders
						</span>
					</Link>
					<span className={cn(tooltip, activeSidebar ? 'active hidden' : '')}>
						Orders
					</span>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'setting'} className={a}>
						<i className={'bx bx-cog' + i}></i>
						<span
							className={cn(
								linksName,
								activeSidebar ? 'active opacity-100 pointer-events-auto' : ''
							)}
						>
							Settings
						</span>
					</Link>
					<span className={cn(tooltip, activeSidebar ? 'active hidden' : '')}>
						Settings
					</span>
				</li>
			</ul>

			{/* add line 176 when activeSidebar */}
			<div className="profile_content absolute text-white bottom-0 left-0 w-full">
				{/* add line 189 when activeSidebar */}
				<div
					className={cn(
						'profile relative py-[10px] px-[12px] h-[60px] transition-all duration-500 ease-in bg-none',
						activeSidebar ? 'active bg-[#1d1b31]' : ''
					)}
				>
					{/* add line 199 when activeSidebar */}
					<div
						className={cn(
							'profile_details flex items-center opacity-0 pointer-events-none whitespace-nowrap',
							activeSidebar ? 'active opacity-100 pointer-events-auto' : ''
						)}
					>
						<UserButton afterSignOutUrl="/"></UserButton>

						<div className="name_job ml-[10px]">
							<div className="name text-[15px] font-normal">Jose Valdivia</div>
							<div className="job text-[12px]">Admin</div>
						</div>
					</div>
					{/* add line 236 and 239 when activeSidebar */}
					<SignOutButton>
						<i
							className={cn(
								'bx bx-log-out absolute bottom-[5px] left-[50%] translate-x-[-50%] min-w-[50px] !leading-[50px] text-[20px] rounded-xl text-center transition-all duration-500 ease-in bg-[#1d1b31] hover:bg-white hover:text-[#1d1b31]',
								activeSidebar ? 'active left-[88%] bg-none' : ''
							)}
							id="log_out"
						></i>
					</SignOutButton>
				</div>
			</div>
		</aside>
	)
}
