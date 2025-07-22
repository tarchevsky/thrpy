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
import styles from './Header.module.scss'

const Header = ({
	highlighting = false,
	isBurgerVersion = false
}: HeaderProps) => {
	const [isMenuActive, setIsMenuActive] = useState(false)
	const [menuOffset, setMenuOffset] = useState(0) // px смещение меню вниз
	const [isDragging, setIsDragging] = useState(false)
	const [dragType, setDragType] = useState<'open' | 'close' | null>(null)

	const menuItems: MenuItem[] = [{ path: '/', label: 'Главная' }]
	const pathname = usePathname()

	const [touchStartY, setTouchStartY] = useState<number | null>(null)
	const [currentTouchY, setCurrentTouchY] = useState<number | null>(null)

	const toggleMenu = () => {
		setIsMenuActive(!isMenuActive)
		setMenuOffset(0)
	}

	const handleMenuItemClick = (path: string) => {
		if (path === pathname) {
			setIsMenuActive(false)
			setMenuOffset(0)
		}
	}

	useEffect(() => {
		setIsMenuActive(false)
		setMenuOffset(0)
	}, [pathname])

	useEffect(() => {
		if (isMenuActive) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
			setMenuOffset(0)
		}
	}, [isMenuActive])

	// --- swipe to open/close logic ---
	useEffect(() => {
		if (isMenuActive) return
		const openZone = document.getElementById('open-menu-zone')
		if (!openZone) return

		const handleTouchStart = (e: TouchEvent) => {
			setTouchStartY(e.touches[0].clientY)
			setCurrentTouchY(e.touches[0].clientY)
			setIsDragging(true)
			setDragType('open')
		}
		const handleTouchMove = (e: TouchEvent) => {
			if (touchStartY !== null && isDragging && dragType === 'open') {
				const delta = touchStartY - e.touches[0].clientY
				setCurrentTouchY(e.touches[0].clientY)
				setMenuOffset(delta > 0 ? delta : 0)
			}
		}
		const handleTouchEnd = () => {
			if (
				touchStartY !== null &&
				currentTouchY !== null &&
				isDragging &&
				dragType === 'open' &&
				touchStartY - currentTouchY > 60
			) {
				setIsMenuActive(true)
				setMenuOffset(0)
			} else {
				setMenuOffset(0)
			}
			setTouchStartY(null)
			setCurrentTouchY(null)
			setIsDragging(false)
			setDragType(null)
		}
		openZone.addEventListener('touchstart', handleTouchStart)
		openZone.addEventListener('touchmove', handleTouchMove)
		openZone.addEventListener('touchend', handleTouchEnd)
		return () => {
			openZone.removeEventListener('touchstart', handleTouchStart)
			openZone.removeEventListener('touchmove', handleTouchMove)
			openZone.removeEventListener('touchend', handleTouchEnd)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMenuActive, touchStartY, currentTouchY, isDragging, dragType])

	// Закрытие меню свайпом вниз с верхнего края меню
	useEffect(() => {
		if (!isMenuActive) return
		const closeZone = document.getElementById('close-menu-zone')
		if (!closeZone) return

		const handleTouchStart = (e: TouchEvent) => {
			setTouchStartY(e.touches[0].clientY)
			setCurrentTouchY(e.touches[0].clientY)
			setIsDragging(true)
			setDragType('close')
		}
		const handleTouchMove = (e: TouchEvent) => {
			if (touchStartY !== null && isDragging && dragType === 'close') {
				const delta = e.touches[0].clientY - touchStartY
				setCurrentTouchY(e.touches[0].clientY)
				setMenuOffset(delta > 0 ? delta : 0)
			}
		}
		const handleTouchEnd = () => {
			if (
				touchStartY !== null &&
				currentTouchY !== null &&
				isDragging &&
				dragType === 'close' &&
				currentTouchY - touchStartY > 60
			) {
				setMenuOffset(window.innerHeight * 0.5 + 100)
				setTimeout(() => {
					setIsMenuActive(false)
					setMenuOffset(0)
				}, 200)
			} else {
				setMenuOffset(0)
			}
			setTouchStartY(null)
			setCurrentTouchY(null)
			setIsDragging(false)
			setDragType(null)
		}
		closeZone.addEventListener('touchstart', handleTouchStart)
		closeZone.addEventListener('touchmove', handleTouchMove)
		closeZone.addEventListener('touchend', handleTouchEnd)
		return () => {
			closeZone.removeEventListener('touchstart', handleTouchStart)
			closeZone.removeEventListener('touchmove', handleTouchMove)
			closeZone.removeEventListener('touchend', handleTouchEnd)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMenuActive, touchStartY, currentTouchY, isDragging, dragType])

	// --- swipe to close logic ---
	useEffect(() => {
		if (!isMenuActive) return
		const nav = document.getElementById('mobile-nav')
		if (!nav) return

		const handleTouchStart = (e: TouchEvent) => {
			setTouchStartY(e.touches[0].clientY)
			setCurrentTouchY(e.touches[0].clientY)
		}
		const handleTouchMove = (e: TouchEvent) => {
			if (touchStartY !== null) {
				const delta = e.touches[0].clientY - touchStartY
				setCurrentTouchY(e.touches[0].clientY)
				setMenuOffset(delta > 0 ? delta : 0)
			}
		}
		const handleTouchEnd = () => {
			if (
				touchStartY !== null &&
				currentTouchY !== null &&
				currentTouchY - touchStartY > 60
			) {
				// Плавно уводим меню вниз
				setMenuOffset(window.innerHeight * 0.5 + 100) // чуть больше половины экрана
				setTimeout(() => {
					setIsMenuActive(false)
					setMenuOffset(0)
				}, 200)
			} else {
				// Возвращаем меню на место
				setMenuOffset(0)
			}
			setTouchStartY(null)
			setCurrentTouchY(null)
		}
		nav.addEventListener('touchstart', handleTouchStart)
		nav.addEventListener('touchmove', handleTouchMove)
		nav.addEventListener('touchend', handleTouchEnd)
		return () => {
			nav.removeEventListener('touchstart', handleTouchStart)
			nav.removeEventListener('touchmove', handleTouchMove)
			nav.removeEventListener('touchend', handleTouchEnd)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMenuActive, touchStartY, currentTouchY])

	return (
		<>
			{/* Зона для свайпа вверх (открытие меню) */}
			{isBurgerVersion && !isMenuActive && (
				<div
					id='open-menu-zone'
					style={{
						position: 'fixed',
						left: 0,
						right: 0,
						bottom: 0,
						height: 40,
						zIndex: 30
					}}
				/>
			)}
			<FadeIn className='cont'>
				<header className='relative flex gap-6 justify-between items-center py-4 m-auto'>
					<div className='my-4 flex flex-col z-20'>
						<Logo />
					</div>
					<nav
						id='mobile-nav'
						style={
							isBurgerVersion && isMenuActive && menuOffset > 0
								? {
										transform: `translateY(${menuOffset}px)`,
										transition:
											touchStartY === null
												? 'transform 0.3s cubic-bezier(0.4,0,0.2,1)'
												: 'none',
										willChange: 'transform'
									}
								: isBurgerVersion && isMenuActive
									? {
											transform: 'translateY(0)',
											transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
											willChange: 'transform'
										}
									: {}
						}
						className={cn(
							{ [styles.active]: isMenuActive },
							'fixed z-20 w-full h-1/2 end-0 bottom-0 translate-y-full opacity-0 transition-all duration-300 ease-out',
							{
								'md:static md:w-auto md:h-auto md:translate-y-0 md:opacity-100':
									!isBurgerVersion
							}
						)}
					>
						{/* Зона для свайпа вниз (закрытие меню) */}
						{isBurgerVersion && isMenuActive && (
							<div
								id='close-menu-zone'
								style={{
									position: 'absolute',
									left: 0,
									right: 0,
									top: 0,
									height: 40,
									zIndex: 30
								}}
							/>
						)}
						<ul
							tabIndex={0}
							className={cn(
								'absolute menu flex-nowrap gap-5 start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
								{
									'md:static md:menu-horizontal md:translate-y-0 md:translate-x-0':
										!isBurgerVersion
								}
							)}
						>
							{menuItems.map((item, index) => (
								<li
									key={index}
									className={cn(styles.item, 'block text-center opacity-0', {
										'md:opacity-100': !isBurgerVersion
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
					<Burger toggleMenu={toggleMenu} isActive={isMenuActive} />
				</header>
			</FadeIn>
		</>
	)
}

export default Header
