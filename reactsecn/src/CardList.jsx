import React from 'react'
import Card from './Card';
import "./cardlist.css"


function CardList({data}) {
  return (
    <div className='cardsList'>
        {
            data.map((card,index) =>(
                <Card
                image = {card.image}
                title ={card.title}
                description ={card.description}
              />
            ))
            }
        

    </div>
  );
}

export default CardList