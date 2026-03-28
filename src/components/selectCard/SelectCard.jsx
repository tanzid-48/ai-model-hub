import React from 'react';
import SubsCard from '../../ui/SubsCard';

const SelectCard = ({ cards }) => {

    const totalPrice = cards.reduce((sum, card) => sum + card.price, 0);

    return (
        <div>
            <h1 className='text-3xl font-bold w-10/12 mx-auto'>Your Cards</h1>

            {cards.length === 0 ? (
           
                <div>
                    <p className="text-center text-2xl text-gray-500 mt-6">
                        No cards selected
                    </p>
                    <p className='text-center text-gray-400'>
                        Go to models to select a card
                    </p>
                </div>
            ) : (
                <>
                    {
                        cards.map(card => (
                            <SubsCard key={card.id} card={card} />
                        ))
                    }

                    <div className="flex justify-between items-center bg-black text-white text-xl w-10/12 mx-auto p-5 rounded-xl font-bold mt-4">
                        <div>Total:</div>
                        <div>${totalPrice}</div>
                    </div>

                    <button className="w-10/12 mx-auto block mt-4 bg-blue-500 hover:bg-red-500 text-white py-2 rounded-xl ">
                        Purchase Now
                    </button>
                </>
            )}
        </div>
    );
};
export default SelectCard;