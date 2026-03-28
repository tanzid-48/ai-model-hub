import React from 'react';
import SubsCard from '../../ui/SubsCard';

const SelectCard = ({ cards }) => {
    console.log(cards)
    return (
        <div className=''>
            <h1 className='text-3xl font-bold w-10/12 mx-auto'>Your Cards</h1>
            {
             cards.map(card => ( <SubsCard key={card.id} card={card} ></SubsCard>

             ))
             }

        </div>
    );
};

export default SelectCard;