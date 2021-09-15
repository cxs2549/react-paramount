import styled from 'styled-components'
import Hero from './Hero/Hero'
import topgun from '../../assets/heroes/topgun.png'
import fences from '../../assets/heroes/fences.png'
import defending from '../../assets/heroes/defending.png'
import boss from '../../assets/heroes/boss.png'
import term from '../../assets/heroes/term.png'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'
import {GrFormPrevious, GrFormNext} from 'react-icons/gr'

const StyledHome = styled.div`
	height: 120vh;
	@media (min-width: 1024px) {
		margin-left: 190px;
	}
	.react-slideshow-container {
		/* margin-top: -80px; */
	}
	.indicators {
		display: flex;
		gap: .75rem;
		transform: translateY(-3rem);
		z-index: 10;
		position: relative;
		@media (min-width: 768px) {
		transform: translateY(-3.2rem);

		}
	}
	.indicator {
		cursor: pointer;
		/* padding: 10px; */
		display: grid;
		place-items: center;
		width: 10px;
		height: 10px;
		text-align: center;
		background-color: #6d6d6d;
		border-radius: 99999px;
	}

	.indicator.active {
		background-color: #fff;
		box-shadow: 0px 1px 2px black;
	}
	svg {
		cursor: pointer;
		@media (min-width: 768px) {
			font-size: 3rem;
		}
	}
	svg polyline {
		stroke: white;
	}
`

const properties = {
	duration: 5000,
	transitionDuration: 500,
	infinite: true,
	indicators: (i) => <div className="indicator text-white" />,
	prevArrow: (
		<div
			style={{ fontSize: '50px', marginRight: '-50px' }}
			className="bg-gray-800  transform translate-x-4 translate-y-9 opacity-70 rounded"
		>
			<GrFormPrevious />
		</div>
	),
	nextArrow: (
		<div
			className="bg-gray-800  transform -translate-x-4 translate-y-9 opacity-70 rounded"
			style={{ fontSize: '50px', marginLeft: '-50px' }}
		>
			<GrFormNext />
		</div>
	)
}

const heroes = [
	{
		title: 'topgun maverick',
		image: topgun,
		quote:
			"When Tom hears something's impossible or can't be done...that's when he gets to work.",
		author: 'Miles Teller, Bradley Bradshaw'
	},
	{
		title: 'fences',
		image: fences,
		quote: 'August Wilson wrote a masterpiece... I was going to film what he wrote.',
		author: 'Denzel Washington, Director, Producer, Actor'
	},
	{
		title: 'defending jacob',
		image: defending,
		quote:
			'We’ve got to get answers for ourselves. Lawyers have boundaries. I don’t, not anymore.',
		author: 'Chris Evans, Andy Barber'
	},
	{
		title: 'terminator: dark fate',
		image: term,
		quote: `It was always Linda's story, so her coming back is f***ing huge.`,
		author: 'Tim Miller, Director'
	},
	{
		title: 'like a boss',
		image: boss,
		quote: 'There is no one you would rather be in that writing bunker with than Miguel.',
		author: 'Adam Cole-Kelly, Writer'
	}
]

const Home = () => {
	return (
		<StyledHome>
			<Fade indicators {...properties}>
				{heroes.map((hero, i) => (
					<Hero
						key={i}
						image={hero.image}
						title={hero.title}
						quote={hero.quote}
						author={hero.author}
					/>
				))}
			</Fade>
		</StyledHome>
	)
}
export default Home
