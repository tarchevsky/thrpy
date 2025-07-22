import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs'
import FadeIn from '@/components/fadeIn/FadeIn'
import PageHeading from '@/components/pageHeading/PageHeading'
import { swingBreadcrumbs } from './breadcrumbsData'

import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Эмоциональные качели: экзистенциальный диалог с собой',
	description:
		'Гуманитарный анализ эмоциональных качелей. Авторский стиль В. Пухова.'
}

export default function SwingPage() {
	return (
		<>
			<div className='py-16 prose m-auto'>
				<Breadcrumbs items={swingBreadcrumbs} />
				<PageHeading title='Эмоциональные качели: экзистенциальный диалог с собой' />
				<FadeIn className='ind cont flex flex-col gap-6 md:gap-8 text-[15px] md:text-base leading-relaxed '>
					<section>
						<p className='italic text-sm mb-4'>
							(Гуманитарный анализ вне клинических ярлыков. Стиль В. Пухова: без
							цифр, без нейротрансмиттеров. Только человек в поисках цельности.)
						</p>
						<hr className='my-4' />
					</section>

					<section>
						<h2 className='text-lg font-semibold mb-4 normal-case'>
							СУТЬ КАЧЕЛЕЙ: КРИК ДУШИ В МИРЕ МАСОК
						</h2>
						<p className='mb-2'>
							<b>Гуманитарная трактовка:</b>
							<br />
							Качели — <b>не дисфункция</b>, а <i>язык непрожитых частей «Я»</i>
							.
						</p>
						<ul className='list-disc ml-6 mb-2'>
							<li>
								<b>Верхняя точка (эйфория):</b> Бунт против системы «ДОЛЖЕН».
								Вопль: <i>«Я существую!»</i>
							</li>
							<li>
								<b>Нижняя точка (обвал):</b> Коллапс под грузом ожиданий. Шёпот:{' '}
								<i>«Я не соответствую»</i>
							</li>
						</ul>
						<p className='mb-2'>
							<b>Ключевой парадокс:</b>
						</p>
						<blockquote className='border-l-4 border-gray-300 pl-4 italic text-gray-700 mb-2'>
							Чем сильнее общество давит требованиями «устойчивости» — тем выше
							амплитуда колебаний. <b>Стабильность стала тюрьмой для души.</b>
						</blockquote>
					</section>

					<section>
						<h2 className='text-lg font-semibold mb-4 normal-case'>
							ПЛЮСЫ: СКРЫТЫЕ ДАРЫ ХАОСА
						</h2>
						<div className='mb-4'>
							<b>1. Прорыв к аутентичности</b>
							<ul className='list-disc ml-6'>
								<li>
									<b>Механизм:</b> Эйфория сносит внутреннего Цензора → человек{' '}
									<i>вдруг</i> признаётся в ненависти к работе, которую терпел
									годами.
								</li>
								<li>
									<b>Риск:</b> Социальное осуждение.
								</li>
								<li>
									<b>Награда:</b> Шанс перестроить жизнь по своим правилам.
								</li>
							</ul>
						</div>
						<div className='mb-4'>
							<b>2. Интуитивный компас</b>
							<ul className='list-disc ml-6'>
								<li>
									<b>Как работает:</b> В фазе обвала <i>исчезают иллюзии</i> →
									приходит ясность: <i>«Это не моё»</i> (брак, карьера, роль
									«хорошего ребёнка»).
								</li>
								<li>
									<b>Цена:</b> Боль от утраты ложных опор.
								</li>
								<li>
									<b>Дар:</b> Освобождение места для подлинного.
								</li>
							</ul>
						</div>
						<div className='mb-4'>
							<b>3. Трансформация силы</b>
							<ul className='list-disc ml-6'>
								<li>
									<b>Динамика:</b> Гнев → энергия для защиты границ. Стыд →
									сигнал о предательстве себя.
								</li>
								<li>
									<b>Исход:</b> Без качелей гнев превращается в депрессию, стыд
									— в саморазрушение.
								</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className='text-lg font-semibold mb-4 normal-case'>
							МИНУСЫ: КОГДА КАЧЕЛИ СТАНОВЯТСЯ ВИСЕЛИЦЕЙ
						</h2>
						<div className='mb-4'>
							<b>1. Предательство тела</b>
							<ul className='list-disc ml-6'>
								<li>
									<b>Логика расплаты:</b> Тело платит за невысказанное:
									<br />
									<ul className='list-[circle] ml-6'>
										<li>
											<i>Подавленная ярость</i> → мигрени, гипертония.
										</li>
										<li>
											<i>Непрожитая печаль</i> → астма, аутоиммунные сбои.
										</li>
									</ul>
								</li>
								<li>
									<b>Приговор медицины:</b> «Стресс», хотя это{' '}
									<i>плата за ложь себе</i>.
								</li>
							</ul>
						</div>
						<div className='mb-4'>
							<b>2. Разрушение отношений</b>
							<ul className='list-disc ml-6'>
								<li>
									<b>Паттерн:</b>
									<br />
									<ul className='list-[circle] ml-6'>
										<li>
											<i>Взлёт:</i> «Ты совершенен!» (проекция идеала)
										</li>
										<li>
											<i>Падение:</i> «Ты ничтожество!» (ненависть к себе через
											другого)
										</li>
									</ul>
								</li>
								<li>
									<b>Итог:</b> Одиночество среди людей.
								</li>
							</ul>
						</div>
						<div className='mb-4'>
							<b>3. Экзистенциальное банкротство</b>
							<ul className='list-disc ml-6'>
								<li>
									<b>Формула:</b>
									<br />
									<ul className='list-[circle] ml-6'>
										<li>10 лет качелей =</li>
										<li>Утрата веры в себя («Я не управляю собой»)</li>
										<li>Цинизм («Всё бессмысленно»)</li>
										<li>Отказ от глубины («Выжить бы»)</li>
									</ul>
								</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className='text-lg font-semibold mb-4 normal-case'>
							ПРИНЯТИЕ РЕШЕНИЙ: МЕЖДУ ИСТИНОЙ И ВЫЖИВАНИЕМ
						</h2>
						<p className='mb-2'>
							<b>Три ловушки гуманитарного выбора:</b>
						</p>
						<div className='w-full overflow-x-auto md:overflow-x-visible scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent'>
							<table className='min-w-[600px] md:min-w-0 w-full text-left text-sm border mb-4'>
								<thead>
									<tr className='bg-gray-100'>
										<th className='border px-2 py-1'>Ситуация</th>
										<th className='border px-2 py-1'>Решение от «Маски»</th>
										<th className='border px-2 py-1'>Решение от «Сути»</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td className='border px-2 py-1'>Ненавистная работа</td>
										<td className='border px-2 py-1'>
											«Перетерплю» (страх голода)
										</td>
										<td className='border px-2 py-1'>
											«Уйду» (вопреки страху)
										</td>
									</tr>
									<tr>
										<td className='border px-2 py-1'>Токсичные отношения</td>
										<td className='border px-2 py-1'>
											«Он(а) изменится» (надежда)
										</td>
										<td className='border px-2 py-1'>«Уйду» (горечь утраты)</td>
									</tr>
									<tr>
										<td className='border px-2 py-1'>Предательство себя</td>
										<td className='border px-2 py-1'>
											«Все так живут» (ложный покой)
										</td>
										<td className='border px-2 py-1'>
											«Буду собой» (одиночество)
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						{/* Индикатор скролла только для мобильных */}
						<div
							className='flex md:hidden justify-center mt-1 mb-4 select-none pointer-events-none'
							aria-hidden='true'
						>
							<span className='inline-flex items-center gap-1 text-gray-400 text-xs'>
								<svg
									width='24'
									height='16'
									viewBox='0 0 24 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='h-4 w-6'
								>
									<rect
										x='2'
										y='7'
										width='20'
										height='2'
										rx='1'
										fill='currentColor'
									/>
									<polygon points='18,4 22,8 18,12' fill='currentColor' />
									<polygon points='6,4 2,8 6,12' fill='currentColor' />
								</svg>
								<span>Проведите вбок</span>
							</span>
						</div>
						<p className='mb-2'>
							<b>Почему качели мешают?</b>
						</p>
						<ul className='list-disc ml-6 mb-2'>
							<li>
								<b>Взлёт:</b> Решения <i>слишком смелые</i> → разрыв связей,
								долги.
							</li>
							<li>
								<b>Обвал:</b> Решения <i>слишком осторожные</i> → жизнь «в
								режиме ожидания».
							</li>
							<li>
								<b>Главная потеря:</b> Отсрочка встречи с{' '}
								<i>экзистенциальной пустотой</i>, где рождается настоящий выбор.
							</li>
						</ul>
					</section>

					<section>
						<h2 className='text-lg font-semibold mb-4 normal-case'>
							ВЫХОД: КАК ПРЕВРАТИТЬ КАЧЕЛИ В ДИАЛОГ
						</h2>
						<div className='mb-4'>
							<b>Шаг 1. Отказаться от войны с собой</b>
							<ul className='list-disc ml-6'>
								<li>
									<b>Ошибка:</b> «Надо стабилизироваться!» → борьба усиливает
									колебания.
								</li>
								<li>
									<b>Путь:</b> Сказать качелям:{' '}
									<i>«Да, вы есть. Что вы хотите мне показать?»</i>
								</li>
							</ul>
						</div>
						<div className='mb-4'>
							<b>Шаг 2. Расшифровать послания</b>
							<ul className='list-disc ml-6'>
								<li>
									<b>Гнев:</b> <i>«Мои границы нарушены»</i>
								</li>
								<li>
									<b>Тоска:</b> <i>«Я предал свою мечту»</i>
								</li>
								<li>
									<b>Эйфория:</b> <i>«Я забыл, что могу летать!»</i>
								</li>
							</ul>
						</div>
						<div className='mb-4'>
							<b>Шаг 3. Практика малых правд</b>
							<ul className='list-disc ml-6'>
								<li>
									<b>До:</b> Молчать, когда коллега присваивает вашу идею →{' '}
									<i>гнев → бессонница</i>.
								</li>
								<li>
									<b>После:</b> «Это мое предложение» →{' '}
									<i>страх → дрожь в коленях → облегчение</i>.
								</li>
								<li>
									<b>Итог:</b> Качели теряют власть, когда их{' '}
									<i>энергия направляется в действие</i>.
								</li>
							</ul>
						</div>
					</section>

					<section>
						<h2 className='text-lg font-semibold mb-4 normal-case'>
							ВОПРОСЫ БЕЗ РОЗОВЫХ ОЧКОВ
						</h2>
						<ol className='list-decimal ml-6 mb-2'>
							<li>
								<b>
									СКОЛЬКО ЛЕТ ВЫ КОРМИТЕ СВОИХ ВНУТРЕННИХ ДЕМОНОВ МОЛЧАНИЕМ?
								</b>
							</li>
							<li>
								<b>
									ВАШИ КАЧЕЛИ — ЭТО БЕЗУМИЕ ИЛИ ЕДИНСТВЕННЫЙ СПОСОБ ОСТАТЬСЯ
									ЖИВЫМ В МЕРТВОМ МИРЕ?
								</b>
							</li>
							<li>
								<b>
									ЧТО СТРАШНЕЕ: ВЗГЛЯНУТЬ В ПРОПАСТЬ СВОЕЙ ПУСТОТЫ ИЛИ ПРОЖИТЬ
									ЖИЗНЬ В РОЛИ УДОБНОГО ДЛЯ ВСЕХ АВАТАРА?
								</b>
							</li>
							<li>
								<b>
									ГОТОВЫ ЛИ ВЫ УМЕРЕТЬ ДЛЯ СТАРОГО СЕБЯ, ЧТОБЫ РОДИТЬСЯ ЗАНОВО?
								</b>
							</li>
						</ol>
						<p className='italic text-sm mb-2'>
							* «Ваши качели — не болезнь. Это крик вашей души в мире, где
							разучились слышать».)*
						</p>
					</section>

					<section>
						<h2 className='text-lg font-semibold mb-4 normal-case'>
							Философский базис
						</h2>
						<ul className='list-disc ml-6 mb-2'>
							<li>
								<b>Роджерс:</b> Качели = разрыв между <i>реальным «Я»</i> и{' '}
								<i>идеальным «Я»</i>.
							</li>
							<li>
								<b>Перлз:</b> Верхняя точка — <i>топ-дог</i>, нижняя —{' '}
								<i>андердог</i>. Цель — их диалог.
							</li>
							<li>
								<b>Франкл:</b> Экстремальные состояния как{' '}
								<i>дорога к смыслу</i>.
							</li>
						</ul>
						<p className='mb-2'>
							<b>Отличие от медицинского подхода:</b>
							<br />
							Здесь нет «пациентов» — есть <i>люди в поисках цельности</i>. Нет
							«симптомов» — есть <i>язык души</i>. Лечение заменяется{' '}
							<i>путем самопознания</i>.
						</p>
					</section>
				</FadeIn>
			</div>
		</>
	)
}
