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
  @media (max-width: ${({theme}) => theme.responsive}) {
    display: block;
    width: 90%;
  }
`;



export const FooterFlex = styled.div`
 display: flex;
 justify-content: space-between;
 ul{
    list-style-type: none;
 }
 li{
    margin-bottom: 1rem;
    padding: 0 0.4rem;
 }
 @media (max-width: ${({theme}) => theme.responsive}) {
    flex-direction: column;
    text-align: center;
    ul{
        padding: 1.8rem;
    }
  }
`;


export const SocialIcons = styled.div`
 
`;












