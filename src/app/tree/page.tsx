import FadeIn from '@/components/fadeIn/FadeIn'
import HomeLink from '@/components/homeLink/HomeLink'
import PageHeading from '@/components/pageHeading/PageHeading'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Статья Дерево Дефектов',
	description: 'Страница политики конфиденциальности'
}

export default async function TreePage() {
	return (
		<>
			<HomeLink />
			<PageHeading
				className='cont text-base font-semibold md:text-lg'
				title='Дефекты характера: как они формируются и как с ними работать'
			/>
			<FadeIn className='ind cont flex flex-col gap-6 md:gap-8 text-[15px] md:text-base leading-relaxed'>
				<section>
					<p className='text-lg font-semibold mb-2'>
						Валентин Владимирович Пухов, клинический психолог
					</p>
					<hr className='my-4' />
					<h2 className='text-lg font-semibold mb-2 normal-case'>Вступление</h2>
					<p>
						Добрый день. Сегодня мы разберём ключевые дефекты характера, которые
						мешают нам строить гармоничные отношения, достигать целей и жить в
						согласии с собой.
					</p>
					<ul className='list-disc ml-6 mt-2'>
						<li>
							Это не врождённые качества, а сформированные модели поведения
						</li>
						<li>Они возникают как защитные механизмы психики</li>
						<li>Их можно осознать и изменить системной работой</li>
					</ul>
				</section>

			   <section>
				   <h2 className='text-lg font-semibold mb-4 normal-case'>
					   1. Расширенная классификация дефектов характера
				   </h2>
					<div className='mb-4'>
						<h3 className='font-medium'>
							1. Лень{' '}
							<span className='font-normal text-gray-500'>
								(пассивное сопротивление)
							</span>
						</h3>
						<ul className='list-disc ml-6'>
							<li>
								<b>Проявления:</b>
								<ul className='list-[circle] ml-6'>
									<li>Откладывание важных дел</li>
									<li>Поиск оправданий бездействию</li>
									<li>"Выученная беспомощность"</li>
								</ul>
							</li>
							<li>
								<b>Корни:</b>
								<ul className='list-[circle] ml-6'>
									<li>Страх неудачи ("Лучше не делать, чем сделать плохо")</li>
									<li>Перфекционизм ("Если не идеально - зачем начинать?")</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className='mb-4'>
						<h3 className='font-medium'>
							2. Эгоизм{' '}
							<span className='font-normal text-gray-500'>
								(гипертрофированное Я)
							</span>
						</h3>
						<ul className='list-disc ml-6'>
							<li>
								<b>Проявления:</b>
								<ul className='list-[circle] ml-6'>
									<li>Игнорирование потребностей других</li>
									<li>Ожидание особого отношения</li>
									<li>"Мир должен крутиться вокруг меня"</li>
								</ul>
							</li>
							<li>
								<b>Корни:</b>
								<ul className='list-[circle] ml-6'>
									<li>Дефицит безусловной любви в детстве</li>
									<li>Компенсация внутренней пустоты</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className='mb-4'>
						<h3 className='font-medium'>
							3. Нечестность{' '}
							<span className='font-normal text-gray-500'>
								(искажённая реальность)
							</span>
						</h3>
						<ul className='list-disc ml-6'>
							<li>
								<b>Проявления:</b>
								<ul className='list-[circle] ml-6'>
									<li>Самообман</li>
									<li>Обещания без намерения выполнять</li>
									<li>"Полуправда" в отношениях</li>
								</ul>
							</li>
							<li>
								<b>Корни:</b>
								<ul className='list-[circle] ml-6'>
									<li>Страх отвержения</li>
									<li>Непринятие себя</li>
								</ul>
							</li>
						</ul>
					</div>
					<div className='mb-4'>
						<h3 className='font-medium'>
							4. Гордыня{' '}
							<span className='font-normal text-gray-500'>
								(токсичное превосходство)
							</span>
						</h3>
						<ul className='list-disc ml-6'>
							<li>
								<b>Проявления:</b>
								<ul className='list-[circle] ml-6'>
									<li>Неспособность просить о помощи</li>
									<li>Обесценивание других</li>
									<li>"Я всегда прав"</li>
								</ul>
							</li>
							<li>
								<b>Корни:</b>
								<ul className='list-[circle] ml-6'>
									<li>Глубинные комплексы неполноценности</li>
									<li>Защита от уязвимости</li>
								</ul>
							</li>
						</ul>
					</div>
				</section>

				<section>
					<h2 className='text-lg font-semibold mb-4 normal-case'>
						2. Страх как основа дефектов
					</h2>
					<p className='mb-2'>
						<b>Как страх формирует дефекты:</b>
					</p>
					<ol className='list-decimal ml-6 mb-2'>
						<li>
							Страх неудачи → Перфекционизм/Лень
							<br />
							<span className='text-gray-600'>
								"Не буду пробовать, чтобы не разочароваться"
							</span>
						</li>
						<li>
							Страх отвержения → Нечестность/Манипуляции
							<br />
							<span className='text-gray-600'>"Совру, чтобы меня любили"</span>
						</li>
						<li>
							Страх уязвимости → Гордыня/Эгоизм
							<br />
							<span className='text-gray-600'>
								"Не подпущу близко, чтобы не ранили"
							</span>
						</li>
					</ol>
					<p className='mb-2'>
						<b>Нейрофизиология страха:</b>
					</p>
					<ul className='list-disc ml-6'>
						<li>Миндалевидное тело (центр страха) гиперреактивно</li>
						<li>Префронтальная кора (контроль) подавлена</li>
						<li>→ Автоматические защитные реакции вместо осознанных решений</li>
					</ul>
				</section>

				<section>
					<h2 className='text-lg font-semibold mb-4 normal-case'>
						3. Алгоритм трансформации
					</h2>
					<p className='mb-2'>
						<b>Шаг 1. Идентификация страха</b>
					</p>
					<p>Техника "Лестница страха":</p>
					<ol className='list-decimal ml-6 mb-2'>
						<li>Что я делаю? (поведение)</li>
						<li>Что я боюсь потерять?</li>
						<li>Что страшного случится, если это произойдёт?</li>
					</ol>
					<p className='mb-2'>
						<b>Шаг 2. Перепроживание травмы</b>
					</p>
					<ul className='list-disc ml-6 mb-2'>
						<li>Метод пустого стула</li>
						<li>Техника "Перепиши сценарий"</li>
					</ul>
					<p className='mb-2'>
						<b>Шаг 3. Формирование новых нейронных путей</b>
					</p>
					<ul className='list-disc ml-6 mb-2'>
						<li>
							21-дневный эксперимент:
							<ul className='list-[circle] ml-6'>
								<li>Каждый день новое маленькое действие вопреки страху</li>
								<li>Фиксация изменений в "Дневнике побед"</li>
							</ul>
						</li>
					</ul>
				</section>

				<section>
					<h2 className='text-lg font-semibold mb-4 normal-case'>
						4. Практические инструменты
					</h2>
					<div className='mb-2'>
						<b>Для лени:</b>
						<ul className='list-disc ml-6'>
							<li>Метод "5 секунд" (Мел Роббинс)</li>
							<li>Техника "Минимум-оптимум"</li>
						</ul>
					</div>
					<div className='mb-2'>
						<b>Для эгоизма:</b>
						<ul className='list-disc ml-6'>
							<li>Упражнение "День без Я"</li>
							<li>Практика "Спроси, прежде чем рассказать"</li>
						</ul>
					</div>
					<div className='mb-2'>
						<b>Для нечестности:</b>
						<ul className='list-disc ml-6'>
							<li>Игра "100% правда" (1 день)</li>
							<li>Чек-лист "Мои полуправды"</li>
						</ul>
					</div>
					<div className='mb-2'>
						<b>Для гордыни:</b>
						<ul className='list-disc ml-6'>
							<li>Практика "Просить о помощи"</li>
							<li>Дневник "Мои ошибки = мой опыт"</li>
						</ul>
					</div>
				</section>

				<section>
					<h2 className='text-lg font-semibold mb-4 normal-case'>Заключение</h2>
					<ul className='list-disc ml-6 mb-2'>
						<li>
							Дефекты характера — это защитные механизмы, <b>устаревшие</b>
						</li>
						<li>Сигналы нерешённых внутренних конфликтов</li>
						<li>Возможность для глубинной трансформации</li>
					</ul>
					<p className='mb-2 font-semibold'>Хорошая новость:</p>
					<p>
						Когда мы осознаём страх в основе дефекта, он теряет власть над нами.
					</p>
					<hr className='my-4' />
					<p className='italic'>
						P.S. Попробуйте сегодня заметить один момент, где проявляется ваш
						главный дефект — и сделать микро-действие по-новому. Именно так
						начинаются изменения.
					</p>
					<p className='text-sm text-gray-500 mt-4'>
						Формат: Глубинная практическая лекция с нейропсихологическим
						обоснованием. Содержит уникальные авторские методики. Подходит для
						интенсивных тренингов личностного роста.
					</p>
				</section>
		   </FadeIn>
	   </>
   )
}
