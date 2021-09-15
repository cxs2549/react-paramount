import { useRef, useState } from 'react'
import styled from 'styled-components'
import './Burger/burger.css'
import useOnClickOutside from 'use-onclickoutside'
import { MdLocalMovies } from 'react-icons/md'
import { CgScreen } from 'react-icons/cg'
import { RiMickeyLine } from 'react-icons/ri'
import { SiRedux } from 'react-icons/si'
import { AiFillStar } from 'react-icons/ai'
import Wrapper from './Wrapper/Wrapper'
import Logo from './Logo/Logo'
import Burger from './Burger/Burger'
import NavLinks from './NavLinks/NavLinks'
import Socials from './Socials/Socials'

const StyledHeader = styled.header`
	color: white;
	@media (min-width: 1024px) {
		position: absolute;
		width: 16%;
		min-width: 190px;
		max-width: 190px;
		height: 700px;
		z-index: 100;
	}

	svg {
		font-size: 2rem;
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
		<StyledHeader open={isOpen} className="h-16 bg-blue-600 text-white">
			<Wrapper>
				<Logo />
				<div ref={menuRef} className="lg:hidden">
					<Burger open={isOpen} links={navLinks2} click={handleClick} />
				</div>
				<div className="hidden lg:block">
					<NavLinks links={navLinks2} />
				</div>
				<div className="hidden lg:block">
					<Socials />
				</div>
			</Wrapper>
		</StyledHeader>
	)
}
export default Header
