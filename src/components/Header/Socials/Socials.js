import styled from 'styled-components'
import {
	TiSocialTwitter,
	TiSocialInstagram,
	TiSocialYoutube,
	TiSocialLinkedin,
	TiSocialFacebook
} from 'react-icons/ti'

const StyledSocials = styled.div`
	justify-content: ${(props) => props.justify};
	svg {
		font-size: 2rem !important;
		cursor: pointer;
		&:hover {
			color: #1d48e5;
		}
		@media (min-width: 1024px) {
			&:hover {
				color: #fff;
			}
		}
	}
`

const Socials = ({ justify }) => {
	return (
		<StyledSocials
			justify={justify}
			className="flex flex-wrap items-center w-full gap-8 lg:gap-x-5 lg:gap-y-2 h-full"
		>
			<TiSocialFacebook />
			<TiSocialInstagram />
			<TiSocialTwitter />
			<TiSocialYoutube />
			<TiSocialLinkedin />
		</StyledSocials>
	)
}
export default Socials
