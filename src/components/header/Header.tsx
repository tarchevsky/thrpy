'use client'

import Burger from '@/components/burger/Burger'
import ThemeToggle from '@/components/themeToggle/ThemeToggle'
import type { HeaderProps, MenuItem } from '@/types'
import cn from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import FadeIn from '../fadeIn/FadeIn'
import Logo from '../logo/Logo'
import MobileMenuSheet from './MobileMenuSheet'

const Header = ({ highlighting = false }: HeaderProps) => {
	const menuItems: MenuItem[] = [{ path: '/', label: 'Главная' }]
	const pathname = usePathname()
	const [isMenuActive, setIsMenuActive] = useState(false)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setIsMenuActive(false)
	}, [pathname])

	useEffect(() => {
		setMounted(true)
	}, [])

	const handleMenuItemClick = (path: string) => {
		if (path === pathname) setIsMenuActive(false)
	}

	return (
		<FadeIn className='cont'>
			<header className='relative flex gap-6 justify-between items-center py-4 m-auto'>
				<div className='my-4 flex flex-col z-20'>
					<Logo />
				</div>
				{/* Desktop menu (md и выше) */}
				<nav className='gap-5 items-center hidden md:flex'>
					<ul className='flex gap-5 items-center'>
						{menuItems.map((item, index) => (
							<li key={index} className='text-center'>
								<Link
									className={cn('px-[10px] btn font-normal', {
										'btn-primary text-base-100 dark:text-primary-content':
											highlighting && item.path === pathname,
										'btn-ghost':
											!highlighting || (highlighting && item.path !== pathname)
									})}
									href={item.path}
								>
									{item.label}
								</Link>
							</li>
						))}
						<li className='justify-center'>
							<ThemeToggle />
						</li>
					</ul>
				</nav>
				{/* Мобильное меню (до md) */}
				<div className='flex md:hidden items-center'>
					<Burger
						toggleMenu={() => setIsMenuActive(v => !v)}
						isActive={isMenuActive}
					/>
					{mounted && (
						<MobileMenuSheet
							isOpen={isMenuActive}
							onClose={() => setIsMenuActive(false)}
							highlighting={highlighting}
							menuItems={menuItems}
							pathname={pathname}
							handleMenuItemClick={handleMenuItemClick}
						/>
					)}
				</div>
			</header>
		</FadeIn>
	)
}

export default Header
