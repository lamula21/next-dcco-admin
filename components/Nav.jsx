import React from 'react'
import Link from 'next/link'
import { StoreIcon } from './Icons/StoreIcon'
import { DashboardIcon } from './Icons/DashboardIcon'
import { PostIcon } from './Icons/PostIcon'
import { CalendarIcon } from './Icons/CalendarIcon'
import { ContactIcon } from './Icons/ContactIcon'
import { UserIcon } from './Icons/UserIcon'
import { MembershipIcon } from './Icons/MembershipIcon'
import { SettingIcon } from './Icons/SettingIcon'
import { ProductIcon } from './Icons/ProductIcon'
import { useRouter } from 'next/router'
import { UserButton } from '@clerk/nextjs'

export const Nav = () => {
	const inactiveLink = 'flex gap-1 p-1'
	const activeLink = inactiveLink + ' bg-white text-blue-900 rounded-l-lg'
	const router = useRouter()
	const { pathname } = router

	return (
		<aside className="text-white p-4 pr-0">
			{/* icons heroicons.com */}
			<Link href={'/'} className="flex gap-1 mb-4 mr-4">
				<StoreIcon></StoreIcon>
				<span>DCCO Admin</span>
			</Link>

			<nav className="flex flex-col gap-2">
				<Link
					href={'/'}
					className={pathname === '/' ? activeLink : inactiveLink}
				>
					<DashboardIcon></DashboardIcon>
					Dashboard
				</Link>

				<Link
					href={'/products'}
					className={pathname.includes('/products') ? activeLink : inactiveLink}
				>
					<ProductIcon></ProductIcon>
					Products
				</Link>

				<Link
					href={'/posts'}
					className={pathname.includes('/posts') ? activeLink : inactiveLink}
				>
					<PostIcon></PostIcon>
					Posts
				</Link>

				<Link
					href={'/events'}
					className={pathname.includes('/events') ? activeLink : inactiveLink}
				>
					<CalendarIcon></CalendarIcon>
					Events
				</Link>

				<Link
					href={'/contacts '}
					className={pathname.includes('/contacts') ? activeLink : inactiveLink}
				>
					<ContactIcon></ContactIcon>
					Contacts
				</Link>

				<Link
					href={'/members'}
					className={pathname.includes('/members') ? activeLink : inactiveLink}
				>
					<MembershipIcon></MembershipIcon>
					Memberships
				</Link>

				<Link
					href={'/users'}
					className={pathname.includes('/users') ? activeLink : inactiveLink}
				>
					<UserIcon></UserIcon>
					Users
				</Link>

				<Link
					href={'/settings'}
					className={pathname.includes('/settings') ? activeLink : inactiveLink}
				>
					<SettingIcon></SettingIcon>
					Settings
				</Link>

				<div className="flex gap-1">
					<UserButton afterSignOutUrl="/"></UserButton>
				</div>
			</nav>
		</aside>
	)
}
