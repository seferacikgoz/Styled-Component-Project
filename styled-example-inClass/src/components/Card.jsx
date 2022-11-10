import React from 'react'
import content from "../data"

const Card = () => {
  return (
    <>
    {content.map((item) =>{
      const { id, body, title, image} = item;
      return(
          <div>
            <div>
            <img src="" alt="" />
            </div>
          <div>
          <h1>{title}</h1>
          <p>{body}</p>
          </div>
          </div>
      );
    })}
    </>
  )
}

export default Card