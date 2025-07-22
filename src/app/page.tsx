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
		<div className='cont py-16 prose m-auto'>
			<h1>Оглавление</h1>
			<ul style={{ listStyle: 'disc', paddingLeft: 20 }}>
				<li>
					<Link href='/tree'>Дерево дефектов</Link>
				</li>
				<li>
					<Link href='/swing'>
						Эмоциональные качели: экзистенциальный диалог с собой
					</Link>
				</li>
			</ul>
		</div>
	)
}
