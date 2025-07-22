'use client'

import Link from 'next/link'

const Logo = () => {
	return (
		<Link href='/'>
			<span className='text-xl font-bold'>Валентин Владимирович Пухов</span>
			<br />
			<span className='text-xs'>клинический психолог</span>
		</Link>
	)
}

export default Logo
