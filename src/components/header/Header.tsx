'use client'

import Burger from '@/components/burger/Burger'
import ThemeToggle from '@/components/themeToggle/ThemeToggle'
import type { HeaderProps, MenuItem } from '@/types'
import cn from 'clsx'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import FadeIn from '../fadeIn/FadeIn'
import Logo from '../logo/Logo'
import styles from './Header.module.scss'

const Header = ({
	highlighting = false,
	isBurgerVersion = false
}: HeaderProps) => {
	const [isMenuActive, setIsMenuActive] = useState(false)
	const menuItems: MenuItem[] = [{ path: '/', label: 'Главная' }]
	const pathname = usePathname()

	const y = useMotionValue(0)
	const controls = useAnimation()
	const DRAG_CLOSE_THRESHOLD = 80 // px

	const toggleMenu = () => {
		setIsMenuActive(!isMenuActive)
		y.set(0)
	}

	const handleMenuItemClick = (path: string) => {
		if (path === pathname) {
			setIsMenuActive(false)
			y.set(0)
		}
	}

	useEffect(() => {
		setIsMenuActive(false)
		y.set(0)
	}, [pathname])

	useEffect(() => {
		if (isMenuActive) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
			y.set(0)
		}
	}, [isMenuActive, y])

	// --- framer-motion drag logic ---
	const handleDragEnd = (_: any, info: { offset: { y: number } }) => {
		if (info.offset.y > DRAG_CLOSE_THRESHOLD) {
			controls.start({ y: '100%', transition: { duration: 0.2 } })
			setTimeout(() => {
				setIsMenuActive(false)
				y.set(0)
			}, 200)
		} else {
			controls.start({ y: 0, transition: { duration: 0.2 } })
		}
	}

	return (
		<FadeIn className='cont'>
			<header className='relative flex gap-6 justify-between items-center py-4 m-auto'>
				<div className='my-4 flex flex-col z-20'>
					<Logo />
				</div>
				{isBurgerVersion ? (
					<motion.nav
						id='mobile-nav'
						initial={{ y: '100%' }}
						animate={isMenuActive ? controls : { y: '100%' }}
						style={{ y }}
						drag='y'
						dragDirectionLock
						dragConstraints={{ top: 0, bottom: 0 }}
						onDragEnd={handleDragEnd}
						className={cn(
							{ [styles.active]: isMenuActive },
							'fixed z-20 w-full h-1/2 end-0 bottom-0 translate-y-full opacity-0 transition-all duration-300 ease-out'
						)}
					>
						<ul
							tabIndex={0}
							className={cn(
								'absolute menu flex-nowrap gap-5 start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
							)}
						>
							{menuItems.map((item, index) => (
								<li
									key={index}
									className={cn(styles.item, 'block text-center opacity-0')}
								>
									<Link
										className={cn('px-[10px] btn font-normal', {
											'btn-primary text-base-100 dark:text-primary-content':
												highlighting && item.path === pathname,
											'btn-ghost':
												!highlighting ||
												(highlighting && item.path !== pathname)
										})}
										href={item.path}
										onClick={() => handleMenuItemClick(item.path)}
									>
										{item.label}
									</Link>
								</li>
							))}
							<li className='justify-center'>
								<ThemeToggle />
							</li>
						</ul>
					</motion.nav>
				) : (
					<nav
						id='mobile-nav'
						className={cn(
							{ [styles.active]: isMenuActive },
							'fixed z-20 w-full h-1/2 end-0 bottom-0 translate-y-full opacity-0 transition-all duration-300 ease-out',
							' md:static md:w-auto md:h-auto md:translate-y-0 md:opacity-100'
						)}
					>
						<ul
							tabIndex={0}
							className={cn(
								'absolute menu flex-nowrap gap-5 start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
								' md:static md:menu-horizontal md:translate-y-0 md:translate-x-0'
							)}
						>
							{menuItems.map((item, index) => (
								<li
									key={index}
									className={cn(styles.item, 'block text-center opacity-0', {
										' md:opacity-100': !isBurgerVersion
									})}
								>
									<Link
										className={cn('px-[10px] btn font-normal', {
											'btn-primary text-base-100 dark:text-primary-content':
												highlighting && item.path === pathname,
											'btn-ghost':
												!highlighting ||
												(highlighting && item.path !== pathname)
										})}
										href={item.path}
										onClick={() => handleMenuItemClick(item.path)}
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
				)}
				<Burger toggleMenu={toggleMenu} isActive={isMenuActive} />
			</header>
		</FadeIn>
	)
}

export default Header
