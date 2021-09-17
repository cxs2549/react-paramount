import styled from 'styled-components'
import { AiFillStar } from 'react-icons/ai'

const StyledNavLinks = styled.ul`
	color: inherit;
	#star {
		opacity: .9;
		position: relative;
		&::before {
			content: '';
			position: absolute;
			left: 1rem;
			top: 4px;
			width: 14px;
			height: 1px;
			background-color: #333;
			@media (min-width: 1024px) {
				background-color: #fff;
			}
		}
		&::after {
			content: '';
			position: absolute;
			right: 1rem;
			top: 4px;
			width: 14px;
			height: 1px;
			background-color: #333;
			@media (min-width: 1024px) {
				background-color: #fff;
			}
		}
	}
	svg {
		font-size: .65rem !important;
	}
	span {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 44px;
		width: 100%;
		border-radius: 12px;
		cursor: pointer;
		&:hover {
			color: white;
			background-color: #1d48e5;
		}
		@media (min-width: 1024px) {
			&:hover {
				color: #1d48e5;
				background-color: #fff;
			}
		}
	}
`
const NavLinks = ({ links }) => {
	return (
		<StyledNavLinks className="flex flex-col gap-7 lg:gap-3 w-full">
			{links.map((link, i) => (
				<li
					key={i}
					className="uppercase font-medium text-base whitespace-nowrap flex flex-col items-center gap-6 lg:gap-4  lg:w-40"
				>
					<span className="w-full">{link.name}</span>
					{i !== 4 && (
						<div id="star">
							<AiFillStar />
						</div>
					)}
				</li>
			))}
		</StyledNavLinks>
	)
}
export default NavLinks
