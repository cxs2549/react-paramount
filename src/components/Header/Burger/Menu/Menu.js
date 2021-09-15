import styled from 'styled-components'
import NavLinks from '../../NavLinks/NavLinks'
import Socials from '../../Socials/Socials'

const StyledMenu = styled.div`
	position: fixed;
	z-index: 100;
	width: 100%;
	top: 63px;
	left: 0;
    opacity: .98;
	transform: ${(props) => (props.open ? 'scaleY(1) scaleX(1)' : 'scaleY(0) scaleX(0)')};
	transform-origin: top center;
	max-width: 100%;
	transition: transform 200ms;
	background-color: #fff;
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
    #lang svg {
        font-size: 1.2rem !important;
    }
`
const Menu = ({ open, links }) => {
	return (
		<StyledMenu className="py-7 px-4" open={open}>
			<NavLinks links={links} />
            <Socials />
			<div id="lang" className="flex items-center text-xs gap-1 cursor-pointer">
				<div>
					<i className="fa fa-globe" aria-hidden="true" />
				</div>
				<span className="font-medium">English</span>
			</div>
		</StyledMenu>
	)
}
export default Menu
