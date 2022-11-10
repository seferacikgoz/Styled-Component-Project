import React from 'react'
import content from "../data"
import { CardImg, CardTitle, Main } from './styles/Card.styled';

const Card = () => {
  return (
    <>
    {content.map((item) =>{
      const { id, body, title, image} = item;
      return(
          <Main key={id} id={id}>
            <div>
            <CardImg src={`./images/${image}`}/>
            </div>
          <div>
          <CardTitle>{title}</CardTitle>
          <p>{body}</p>
          </div>
          </Main>
      );
    })}
    </>
  )
}

export default Card