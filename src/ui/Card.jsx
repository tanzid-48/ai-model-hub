import { useState } from "react";


const Card = ({model}) => {
  const [isSubscribed,setIsSubscribed] = useState(false)


   const  handleSubscribed =()=>{
    setIsSubscribed(true)


   }

    return (
     <div className="border rounded-2xl p-6 shadow-md relative bg-zinc-200">

         {model.status === "popular" && (
      <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
        Popular
      </span>
    )}
      <img
        src={model.image}
        alt={model.title}
        className="w-20 mx-auto mb-4"
      />

      <h2 className="text-2xl font-bold text-center">
        {model.title}
      </h2>

      <p className=" text-gray-600 mt-3 text-center whitespace-pre-line">
        {model.description}
      </p>

      <p className="mt-4 text-center text-xl font-semibold text-blue-600">
        ${model.price}/month
      </p>

       <button onClick={() => handleSubscribed()} className= {`mt-5 w-full bg-blue-500  text-white py-2 rounded-xl
       ${ isSubscribed
        ? "bg-green-500 hover:bg-green-600"
        : " bg-blue-500 hover:bg-blue-600"

       } `}>
      {
        isSubscribed ?"SubsCribed" : "SubsCribed Now"
      }
    </button>
   </div>
     
  );
};

export default Card;