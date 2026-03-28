import React from 'react';

const Card = ({model}) => {
    console.log(model);
    return (
        <div>
            <h2>{model.title}</h2>
            <p>{model.description}</p>
        </div>
    );
};

export default Card;