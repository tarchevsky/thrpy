import ThemeToggle from '@/components/themeToggle/ThemeToggle'
import type { MenuItem } from '@/types'
import cn from 'clsx'
import Link from 'next/link'
import { Sheet } from 'react-modal-sheet'

interface MobileMenuSheetProps {
	isOpen: boolean
	onClose: () => void
	highlighting: boolean
	menuItems: MenuItem[]
	pathname: string
	handleMenuItemClick: (path: string) => void
}

const snapPoints = [0.5, 0] // 50% и закрыто

const MobileMenuSheet = ({
	isOpen,
	onClose,
	highlighting,
	menuItems,
	pathname,
	handleMenuItemClick
}: MobileMenuSheetProps) => (
	<Sheet
		isOpen={isOpen}
		onClose={onClose}
		snapPoints={snapPoints}
		initialSnap={0}
	>
		<Sheet.Container>
			{/* Кастомная статичная линия как в Apple, не мешает свайпу */}
			<div className='pointer-events-none absolute left-0 right-0 top-3 flex justify-center z-10'>
				<div className='w-28 h-1 rounded-full bg-gray-300 dark:bg-gray-600' />
			</div>
			<Sheet.Content className='bg-base-100 rounded-t-box'>
				<ul className='flex flex-col gap-5 items-center justify-center py-8 h-[50svh]'>
					{menuItems.map((item, index) => (
						<li key={index} className='text-center'>
							<Link
								className={cn('px-[10px] btn font-normal w-full', {
									'btn-primary text-base-100 dark:text-primary-content':
										highlighting && item.path === pathname,
									'btn-ghost':
										!highlighting || (highlighting && item.path !== pathname)
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
			</Sheet.Content>
		</Sheet.Container>
		<Sheet.Backdrop />
	</Sheet>
)

export default MobileMenuSheet
