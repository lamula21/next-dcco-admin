import Link from 'next/link'

// import dccoa-logo.jpeg from '@/public/dccoa-logo'
// import dccoa-logo from '@/public/dccoa-logo'
// import dccoa-logo from '@/public/dccoa-logo'
// import dccoa-logo from '@/public/dccoa-logo'
import dccoaLogo from '@/public/dccoa-logo.jpeg'

import { cn } from '@/lib/utils'
import { MembershipIcon } from './Icons/MembershipIcon'
import { SignOutButton, UserButton } from '@clerk/nextjs'
import { StoreIcon } from './Icons/StoreIcon'
import {
	anchorClassName,
	iClassName,
	linksNameClassName,
} from '@/lib/classNames'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import Image from 'next/image'
import { Badge } from './ui/badge'

export function Nav2({ activeSidebar, SetActiveSidebar, userName }) {
	function toggleSidebar() {
		SetActiveSidebar(!activeSidebar)
	}

	return (
		<aside
			className={cn(
				'group sidebar flex flex-col fixed top-0 left-0 h-full w-[78px] bg-[#11101d] pt-1.5 z-[1]',
				activeSidebar
					? 'w-[240px] rounded-tr-[12px]'
					: 'hover:w-[240px] hover:rounded-tr-[12px]'
			)}
		>
			<div className="ml-[5px] flex items-center px-3.5">
				<Link
					href={'/'}
					className={cn(
						'text-white flex h-[50px] w-full items-center pointer-events-none mt-5 mb-3',
						activeSidebar
							? 'pointer-events-none'
							: 'group-hover:pointer-events-auto'
					)}
				>
					<Image
						alt="DCCO Logo"
						src={dccoaLogo}
						width={50}
						className={cn('mr-2 ', activeSidebar ? '' : '')}
					/>
					{/* <StoreIcon
						className={cn(
							'mr-2 text-[28px] font-normal',
							activeSidebar ? '' : ''
						)}
					/> */}
					<div
						className={cn(
							'ml-[2px] logo_name text-[20px] font-normal whitespace-nowrap',
							activeSidebar
								? 'opacity-100 pointer-events-auto'
								: 'opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto'
						)}
					>
						DCCOA
					</div>
				</Link>

				<RadioGroup
					onChange={() => toggleKeyDown()}
					className={cn(
						'flex',
						activeSidebar ? 'flex' : 'hidden group-hover:flex'
					)}
				>
					<RadioGroupItem
						onChange={() => toggleKeyDown()}
						checked={activeSidebar}
						className="border-white text-white"
						onClick={toggleSidebar}
					/>
				</RadioGroup>
			</div>

			<ul className="mt-5 px-3.5 grow overflow-y-auto">
				<li className="mt-[1px] relative h-[50px] w-full my-0 ml-[5px] list-none leading-[50px]">
					<i
						className={
							'bx bx-search absolute z-[99] text-white text-[22px] hover:bg-white hover:text-[#1d1b31]' +
							iClassName
						}
					></i>

					<input
						className="absolute h-full w-full left-0 top-0 rounded-[12px] outline-none border-none bg-[#1d1b31] pl-[50px] text-[18px] text-white m-0 p-0 box-border"
						type="text"
						placeholder="Search..."
					/>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link
						href={'/'}
						className={cn(anchorClassName, 'flex justify-between')}
					>
						<div>
							<i className={'bx bx-grid-alt' + iClassName}></i>
							<span
								className={cn(
									linksNameClassName,
									'hover:text-[#11101d]',
									activeSidebar
										? 'opacity-100 pointer-events-auto'
										: 'group-hover:opacity-100 group-hover:pointer-events-auto'
								)}
							>
								Dashboard
							</span>
						</div>
					</Link>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/products'} className={anchorClassName}>
						<i className={'bx bx-shopping-bag' + iClassName}></i>
						<span
							className={cn(
								linksNameClassName,
								activeSidebar
									? 'opacity-100 pointer-events-auto'
									: 'group-hover:opacity-100 group-hover:pointer-events-auto'
							)}
						>
							Products
						</span>
					</Link>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/orders'} className={anchorClassName}>
						<i className={'bx bx-cart-alt' + iClassName}></i>
						<span
							className={cn(
								linksNameClassName,
								activeSidebar
									? 'opacity-100 pointer-events-auto'
									: 'group-hover:opacity-100 group-hover:pointer-events-auto'
							)}
						>
							Orders
						</span>
					</Link>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link
						href={'/events'}
						className={cn(anchorClassName, 'flex justify-between')}
					>
						<div>
							<i className={'bx bx-calendar' + iClassName}></i>
							<span
								className={cn(
									linksNameClassName,
									activeSidebar
										? 'opacity-100 pointer-events-auto'
										: 'group-hover:opacity-100 group-hover:pointer-events-auto'
								)}
							>
								Events
							</span>
						</div>

						<Badge className="bg-indigo-600 mr-1">New</Badge>
					</Link>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link
						href={'/newsletters'}
						className={cn(anchorClassName, 'flex justify-between')}
					>
						<div>
							<i className={'bx bx-news' + iClassName}></i>
							<span
								className={cn(
									linksNameClassName,
									activeSidebar
										? 'opacity-100 pointer-events-auto'
										: 'group-hover:opacity-100 group-hover:pointer-events-auto'
								)}
							>
								Newsletter
							</span>
						</div>

						<Badge className="bg-red-600 mr-1">Alpha</Badge>
					</Link>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/'} className={anchorClassName}>
						<i className={'bx bx-message-square-edit' + iClassName}></i>
						<span
							className={cn(
								linksNameClassName,
								activeSidebar
									? 'opacity-100 pointer-events-auto'
									: 'group-hover:opacity-100 group-hover:pointer-events-auto'
							)}
						>
							Posts
						</span>
					</Link>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/'} className={anchorClassName}>
						<i className={'bx bx-paper-plane' + iClassName}></i>
						<span
							className={cn(
								linksNameClassName,
								activeSidebar
									? 'opacity-100 pointer-events-auto'
									: 'group-hover:opacity-100 group-hover:pointer-events-auto'
							)}
						>
							Messages
						</span>
					</Link>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/'} className={anchorClassName}>
						<i className={'bx bx-code-alt' + iClassName}></i>
						<span
							className={cn(
								linksNameClassName,
								activeSidebar
									? 'opacity-100 pointer-events-auto'
									: 'group-hover:opacity-100 group-hover:pointer-events-auto'
							)}
						>
							Pages
						</span>
					</Link>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/'} className={anchorClassName}>
						<MembershipIcon />
						<span
							className={cn(
								linksNameClassName,
								activeSidebar
									? 'opacity-100 pointer-events-auto'
									: 'group-hover:opacity-100 group-hover:pointer-events-auto'
							)}
						>
							Memberships
						</span>
					</Link>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/'} className={anchorClassName}>
						<i className={'bx bx-user' + iClassName}></i>
						<span
							className={cn(
								linksNameClassName,
								activeSidebar
									? 'opacity-100 pointer-events-auto'
									: 'group-hover:opacity-100 group-hover:pointer-events-auto'
							)}
						>
							Users
						</span>
					</Link>
				</li>

				<li className="relative h-[50px] w-full my-0 mx-[5px] list-none leading-[50px]">
					<Link href={'/'} className={anchorClassName}>
						<i className={'bx bx-cog' + iClassName}></i>
						<span
							className={cn(
								linksNameClassName,
								activeSidebar
									? 'opacity-100 pointer-events-auto'
									: 'group-hover:opacity-100 group-hover:pointer-events-auto'
							)}
						>
							Settings
						</span>
					</Link>
				</li>
			</ul>

			<div className="text-white w-full">
				<div
					className={cn(
						'relative py-[10px]  px-[12px] h-[60px] transition-all duration-500 ease-in bg-none',
						activeSidebar ? 'bg-[#1d1b31]' : 'group-hover:bg-[#1d1b31]'
					)}
				>
					<div
						className={cn(
							'profile_details flex items-center opacity-0 pointer-events-none whitespace-nowrap',
							activeSidebar
								? 'opacity-100 pointer-events-auto'
								: 'group-hover:opacity-100 group-hover:pointer-events-auto'
						)}
					>
						<UserButton afterSignOutUrl="/"></UserButton>

						<div className="name_job ml-[10px]">
							<div className="name text-[15px] font-normal">{userName}</div>
							<div className="job text-[12px]">Admin</div>
						</div>
					</div>

					<SignOutButton>
						<i
							className={cn(
								'bx bx-log-out absolute bottom-[5px] left-[50%] translate-x-[-50%] min-w-[50px] !leading-[50px] text-[20px] rounded-xl text-center transition-all duration-500 ease-in bg-[#1d1b31] hover:bg-white hover:text-[#1d1b31]',
								activeSidebar
									? 'left-[88%] bg-none'
									: 'group-hover:left-[88%] group-hover:bg-none'
							)}
							id="log_out"
						></i>
					</SignOutButton>
				</div>
			</div>
		</aside>
	)
}
