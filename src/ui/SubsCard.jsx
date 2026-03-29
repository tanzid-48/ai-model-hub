import React from 'react';
import { CircleX } from 'lucide-react';
import { toast } from 'react-toastify';



const SubsCard = ({ card , cards, SetCards }) => {
  
    const handleRemoved = (card) => {
        const filterData = cards.filter(c => c.id !== card.id);
        SetCards (filterData);
        toast.warning(`${card.title} has removed`);
    }

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

               <div className="flex gap-3 items-center">
                 <div className="text-xl font-bold">
                    ${card.price}/month
                </div>
                <button onClick={()=> handleRemoved(card)} className=''>  <CircleX /> </button>
               </div>
            </div>
        </div>

    );
};

export default SubsCard;