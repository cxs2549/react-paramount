import styled from 'styled-components'
import Hero from './Hero/Hero'
const StyledHome = styled.div`
	height: 120vh;
	@media (min-width: 1024px) {
		margin-left: 180px;
		
	}
`
const Home = () => {
	return (
		<StyledHome >
			<Hero />
		</StyledHome>
	)
}
export default Home
