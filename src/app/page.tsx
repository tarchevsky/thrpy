import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Динамический импорт клиентского компонента без SSR
const YandexMap = dynamic(() => import('@/components/yandexMap/YandexMap'), {
	ssr: false
})

export const metadata: Metadata = {
	title: 'Главная',
	description: 'Дескрипшен главной страницы'
}

export default function HomePage() {
	return (
		<div className='cont'>
			<Link href='/tree'>Дерево дефектов</Link>
		</div>
	)
}
