import styled from 'styled-components'
import logo from '../../../assets/logo-2.png'
import { AiFillStar } from 'react-icons/ai'
import Socials from '../Socials/Socials'
import { useRef, useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

const StyledFullNav = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
    opacity: ${props => (props.show ? 1 : 0)};
	transition: opacity 1s cubic-bezier(0.23, 1, 0.320, 1);
	ul {
		svg {
			font-size: .65rem !important;
		}
	}

	#star {
		opacity: .9;
		position: relative;
		&:nth-child(1) {
			display: none;
		}
	}
`

const navLinks = [
	{ name: 'movies' },
	{ name: 'tv' },
	{ name: 'animation' },
	{ name: 'careers' },
	{ name: 'studio tours' }
]

const FullNav = () => {
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 700) {
                setInProp(true)
			} else {
                setInProp(false)
            }
		}
		window.addEventListener('scroll', handleScroll)
	})
	const [ inProp, setInProp ] = useState(false)

	return (
		<CSSTransition
			in={inProp}
			timeout={200}
			classNames="my-node"
			onEnter={() => setInProp(true)}
			onExited={() => setInProp(false)}
		>
			<StyledFullNav className=" h-16 bg-blue-600 text-white" show={inProp}>
				<div className="mx-auto max-w-6xl px-4 xl:px-0 flex justify-between gap-8 items-center h-full">
					<img src={logo} alt="" className="w-40 filter invert brightness-0" />
					<ul className="flex items-center gap-4">
						{navLinks.map((link, i) => (
							<li
								key={i}
								className="uppercase font-medium flex items-center gap-4 whitespace-nowrap"
							>
								<span>{link.name}</span>
								{i !== 4 && (
									<div id="star">
										<AiFillStar />
									</div>
								)}
							</li>
						))}
					</ul>
                    {inProp}
					<Socials justify="flex-end" />
				</div>
			</StyledFullNav>
		</CSSTransition>
	)
}
export default FullNav
