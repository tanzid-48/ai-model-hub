import React from 'react';

const SubsCard = ({ card }) => {
    return (

           <div className="border p-3 rounded-xl shadow mt-4 w-10/12 mx-auto">
            <div className="flex justify-between items-center">
                
                <div className="flex items-center gap-2">
                    <img
                        src={card.image}
                        alt={card.title}
                        className="w-16"
                    />
                    <h2 className="text-lg font-bold">
                        {card.title}
                    </h2>
                </div>

                <div className="text-xl font-bold">
                    ${card.price}/month
                </div>
            </div>
        </div>

    );
};

export default SubsCard;