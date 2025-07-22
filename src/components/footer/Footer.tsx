import FadeIn from '../fadeIn/FadeIn'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<FadeIn>
			<footer className='footer footer-center p-10 text-base-content rounded'>
				<aside>
					<p>{year}</p>
				</aside>
			</footer>
		</FadeIn>
	)
}

export default Footer
