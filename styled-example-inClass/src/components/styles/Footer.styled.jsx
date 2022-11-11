import styled from 'styled-components';

const FooterDiv = styled.footer`
background: ${({theme}) => theme.colors.footer};
`;

export default FooterDiv;




export const FooterContent = styled.div`
max-width: ${({theme}) => theme["max-width"]};
`;



