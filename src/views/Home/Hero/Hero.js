import styled from 'styled-components'
import hero from '../../../assets/heroes/topgun.png'
const StyledHero = styled.div`
@media (min-width: 1024px) {
    height: 700px;
}
`
const Hero = () => {
return (
<StyledHero className="flex flex-col">
<img src={hero} alt="" />
<div className="py-4 px-4 border-b lg:border-r flex-grow flex flex-col justify-center ">
    <h1 className="text-3xl font-light opacity-90 uppercase text-center mb-3 text-blue-800">topgun: maverick</h1>
    <p className="italic text-center text-xl opacity-90 text-gray-800">"When Tom hears something's impossible or can't be done...that's when he gets to work."</p>
    <span className="text-center block mt-2 uppercase text-xs text-yellow-700 font-medium opacity-90">Miles Teller, Bradley Bradshaw</span>
</div>
</StyledHero>
)
}
export default Hero