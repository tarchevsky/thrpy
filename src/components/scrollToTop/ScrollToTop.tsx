'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { type FC, useEffect, useState } from 'react'
import { IoIosArrowRoundUp } from 'react-icons/io'

const ScrollToTop: FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const handleScroll = (): void => {
		if (window.scrollY > 300) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = (): void => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	useEffect((): (() => void) => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0 }}
					transition={{ type: 'spring', stiffness: 150, damping: 20 }}
					className='fixed z-10 bottom-5 right-5'
				>
					<motion.button
						onClick={scrollToTop}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
						aria-label='Кнопка наверх страницы'
						style={{
							background: 'none',
							border: 'none',
							padding: 0,
							cursor: 'pointer'
						}}
					>
						<IoIosArrowRoundUp size={20} />
					</motion.button>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default ScrollToTop
