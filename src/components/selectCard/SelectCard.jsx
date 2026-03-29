import React from 'react';
import SubsCard from '../../ui/SubsCard';

const SelectCard = ({ cards, SetCards}) => {

    const handlePayment = () => {
        SetCards([])
    }
    const totalPrice = cards.reduce((sum, card) => sum + card.price, 0);

    return (
        <div>

            {cards.length === 0 ? (
           
                <div className='py-10'>
                    <p className="text-center text-2xl text-gray-500 mt-6">
                        No cards selected
                    </p>
                    <p className='text-center text-gray-400'>
                        Go to models to select a card
                    </p>
                </div>
            ) : (
                <>
                <h1 className='text-3xl font-bold w-10/12 mx-auto'>Your Cards</h1>
                    {
                        cards.map(card => (
                            <SubsCard key={card.id} card={card}  cards = {cards} SetCards = {SetCards}/>
                        ))
                    }

                    <div className="flex justify-between items-center bg-black text-white text-xl w-10/12 mx-auto p-5 rounded-xl font-bold mt-4">
                        <div>Total:</div>
                        <div>${totalPrice}</div>
                    </div>

                    <button onClick={handlePayment} className="w-10/12 mx-auto block mt-4 bg-blue-500 hover:bg-red-500 text-white py-2 rounded-xl my-10 ">
                        Proceed To Checkout
                    </button>
                </>
            )}
        </div>
    );
};
export default SelectCard;