import styled from 'styled-components'
import {
	TiSocialTwitter,
	TiSocialInstagram,
	TiSocialYoutube,
	TiSocialLinkedin,
	TiSocialFacebook
} from 'react-icons/ti'

const StyledSocials = styled.div`
	svg {
		font-size: 2rem;
		cursor: pointer;
		&:hover {
			color: #1D48E5;
		}
		@media (min-width: 1024px) {
			&:hover {
				color: #fff;
			}
		}
	}
`

const Socials = () => {
	return (
		<StyledSocials className="flex flex-wrap items-center justify-center w-full gap-8 lg:gap-x-5 lg:gap-y-4 h-full">
			<TiSocialFacebook />
			<TiSocialInstagram />
			<TiSocialTwitter />
			<TiSocialYoutube />
			<TiSocialLinkedin />
		</StyledSocials>
	)
}
export default Socials
