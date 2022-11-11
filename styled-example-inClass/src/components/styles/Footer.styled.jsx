import styled from 'styled-components';

const FooterDiv = styled.footer`
background: ${({theme}) => theme.colors.footer};
`;

export default FooterDiv;




export const FooterContent = styled.div`
max-width: ${({theme}) => theme["max-width"]};
margin: auto;
`;



export const FooterLogo = styled.img`
  width: 320px;
  margin: 1rem auto;
`;






