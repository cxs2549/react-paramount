import styled from 'styled-components'
import Menu from './Menu/Menu'

const StyledBurger = styled.div`
	width: 44px;

`
const Burger = ({open, click, links}) => {
	return (
		<StyledBurger open={open}>
			<div id="nav-icon1" onClick={click}>
				<span />
				<span />
				<span />
			</div>
			<Menu open={open} links={links} />
		</StyledBurger>
	)
}
export default Burger
