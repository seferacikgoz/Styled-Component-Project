import styled from 'styled-components';

export const Main = styled.div`
  width: ${({theme}) => theme .width};
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem;
  margin: 1rem auto;
  gap: 3rem;
  max-width: ${({theme}) => theme["max-width"]};;
  flex-direction: ${({id}) => (id % 2 ? "row" : "row-reverse") };
`;

export const CardImg = styled.img`
 
`;


