import styled from 'styled-components'
const StyledWrapper = styled.div``
const Wrapper = ({children}) => {
return (
<StyledWrapper className="px-4 mx-auto max-w-6xl flex items-center h-full justify-between lg:flex-col lg:justify-start md:gap-y-6 md:py-6">
{children}
</StyledWrapper>
)
}
export default Wrapper