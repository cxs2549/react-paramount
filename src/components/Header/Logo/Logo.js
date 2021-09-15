import styled from 'styled-components'
import logo from '../../../assets/logo-2.png'
import logo2 from '../../../assets/logo-1.png'

const StyledLogo = styled.div``

const Logo = () => {
	return (
		<StyledLogo>
			<img src={logo} className="w-32 filter brightness-0 invert lg:hidden" alt="" />
			<img src={logo2} className="w-40 filter brightness-0 invert hidden lg:block" alt="" />
		</StyledLogo>
	)
}
export default Logo
