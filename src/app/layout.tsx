import '@/assets/styles/globals.css'
import '@/assets/styles/swiper.css'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import PageTransition from '@/components/pageTransition/PageTransition'
import ScrollToTop from '@/components/scrollToTop/ScrollToTop'
import '@fontsource-variable/raleway'
import { AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'

const yId = process.env.NEXT_PUBLIC_YID

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='ru'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
				/>
			</head>
			<body>
				<AnimatePresence>
					<PageTransition>
						<Header isBurgerVersion />
						{children}
						<Footer />
					</PageTransition>
				</AnimatePresence>
				<ScrollToTop />
			</body>
		</html>
	)
}
