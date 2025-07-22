import Link from 'next/link'

export default function HomeLink() {
	return (
		<Link
			href='/'
			className='fixed top-5 md:top-6 left-2 md:left-6 z-50 text-lg font-bold text-gray-700 hover:text-blue-600 transition-colors flex items-center'
		>
			<svg
				width='28'
				height='28'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M15 19L8 12L15 5'
					stroke='currentColor'
					strokeWidth='2'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		</Link>
	)
}
