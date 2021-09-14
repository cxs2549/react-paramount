import { useRef, useState } from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo-2.png'
import logo2 from '../../assets/logo-1.png'
import './Burger/burger.css'
import useOnClickOutside from 'use-onclickoutside'
import {
	TiSocialTwitter,
	TiSocialInstagram,
	TiSocialYoutube,
	TiSocialLinkedin,
	TiSocialFacebook
} from 'react-icons/ti'
import { MdLocalMovies } from 'react-icons/md'
import { CgScreen } from 'react-icons/cg'
import { RiMickeyLine } from 'react-icons/ri'
import { SiRedux } from 'react-icons/si'
import { AiFillStar } from 'react-icons/ai'

const StyledHeader = styled.header`
	@media (min-width: 1024px) {
		position: absolute;
		width: 16%;
		min-width: 180px;
		max-width: 180px;
		height: 700px;
	}
	svg {
		font-size: 2rem;
	}
	#navLinks {
		#star {
			opacity: .9;
			position: relative;
			&::before {
				content: '';
				position: absolute;
				left: 1rem;
				top: 4px; width: 14px;
				height: 1px;
				background-color: #fff;
			}
			&::after {
				content: '';
				position: absolute;
				right: 1rem;
				top: 4px; width: 14px;
				height: 1px;
				background-color: #fff;
			}
			&:nth-of-type(2) {
				/* display: none; */
				color: red;
			}
		}
		svg {
			font-size: .65rem;
		}
	}

	#burger {
		width: 44px;
		#menu {
			position: fixed;
			z-index: 10;
			width: 100%;
			top: 63px;
			left: 0;
			transform: ${(props) => (props.open ? 'scaleY(1) scaleX(1)' : 'scaleY(0) scaleX(0)')};
			transform-origin: top center;
			max-width: 100%;
			transition: transform 200ms;
			background-color: #fff;
			/* z-index: 100; */
			color: #333;
			overflow-y: scroll;
			height: calc(100vh - 63px);
			display: flex;
			flex-flow: column;
			justify-content: space-between;

			.listItem {
				width: 100%;
				font-size: 105%;
				display: flex;
				@media (min-width: 768px) {
					font-size: 120%;
				}
				a {
					border-radius: 4px;
					width: 100%;
					height: 100%;
					/* opacity: .9; */
					&:hover {
						opacity: 1;
					}
				}
			}
		}
	}
`
const navLinks2 = [
	{ name: 'movies', icon: <MdLocalMovies /> },
	{ name: 'tv', icon: <CgScreen /> },
	{ name: 'animation', icon: <RiMickeyLine /> },
	{ name: 'careers', icon: <SiRedux /> },
	{ name: 'studio tours', icon: <AiFillStar /> }
]

const Header = () => {
	const [ isOpen, setIsOpen ] = useState(false)

	const handleClick = () => {
		document.getElementById('nav-icon1').classList.toggle('open')
		document.body.classList.toggle('freezeflow')
		setIsOpen(!isOpen)
	}
	const handleClose = () => {
		document.getElementById('nav-icon1').classList.remove('open')
		document.body.classList.remove('freezeflow')
		setIsOpen(false)
	}
	const menuRef = useRef()
	useOnClickOutside(menuRef, handleClose)

	return (
		<StyledHeader open={isOpen} className=" h-16 bg-blue-600 text-white">
			<div
				id="wrapper"
				className="px-4 mx-auto max-w-6xl flex items-center h-full justify-between lg:flex-col lg:justify-start md:gap-y-6 md:py-6"
			>
				<img src={logo} className="w-32 filter brightness-0 invert lg:hidden" alt="" />
				<img
					src={logo2}
					className="w-40 filter brightness-0 invert hidden lg:block"
					alt=""
				/>
				<div id="burger" className="lg:hidden" ref={menuRef}>
					<div id="nav-icon1" onClick={handleClick}>
						<span />
						<span />
						<span />
					</div>
					<div id="menu" className="p-5 pt-8 ">
						<ul
							id="menuLinks"
							className="flex flex-col items-center justify-center capitalize font-medium gap-5"
						>
							{navLinks2.map((link, i) => (
								<li key={i} className="listItem">
									<a href="/" className="flex items-center justify-between">
										<span>{link.name}</span>
										{/* <HiChevronRight /> */}
									</a>
								</li>
							))}
						</ul>
						<div className="flex items-center text-xs gap-1 cursor-pointer">
							<div>
								<i className="fa fa-globe" aria-hidden="true" />
							</div>
							<span className="font-medium">English</span>
						</div>
					</div>
				</div>
				<ul id="navLinks" className="hidden lg:flex md:flex-col  md:gap-3 w-full">
					{navLinks2.map((link, i) => (
						<li
							key={i}
							className="uppercase font-medium text-base whitespace-nowrap flex flex-col items-center gap-2"
						>
							<span>{link.name}</span>
							<div id="star">
								<AiFillStar />
							</div>
						</li>
					))}
				</ul>
				<div className="hidden lg:flex flex-col items-center w-full gap-4 h-full">
					<TiSocialFacebook />
					<TiSocialInstagram />
					<TiSocialTwitter />
					<TiSocialYoutube />
					<TiSocialLinkedin />
				</div>
			</div>
		</StyledHeader>
	)
}
export default Header
