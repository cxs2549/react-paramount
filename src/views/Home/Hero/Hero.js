import styled from 'styled-components'

const StyledHero = styled.div`
	@media (min-width: 1024px) {
		height: 700px;
	}
	#image {
		position: relative;
		@media (min-width: 768px) {
			&::after {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				background-image: linear-gradient(to top, rgba(0, 0, 0, .8) 1%, transparent 25%);
			}
		}
	}
`
const Hero = ({ image, title, quote, author }) => {
	return (
		<StyledHero className="flex flex-col border-b xl:border-r">
			<div className="relative ">
				<div id="image">
					<img src={image} alt="" />
				</div>

				<div className="py-4 px-4 pb-12 lg:pb-0  flex-grow flex flex-col  justify-center ">
					<h1 className="whitespace-nowrap text-3xl font-light opacity-90 uppercase text-center mb-3 text-blue-800 md:text-white md:text-5xl md:absolute md:bottom-24 md:left-1/2 md:transform md:-translate-x-1/2 md:opacity-80">
						{title}
					</h1>
					<p className="italic text-center text-xl lg:text-2xl opacity-90 text-gray-800">
						"{quote}"
					</p>
					<span className="text-center block mt-2 md:mt-3 uppercase text-xs text-yellow-700 font-medium opacity-90">
						{author}
					</span>
				</div>
			</div>
		</StyledHero>
	)
}
export default Hero
