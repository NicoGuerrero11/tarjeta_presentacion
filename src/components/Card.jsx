import React from 'react';

const Card = ({name, image, description}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{description}</p>
        </div>
    );
};

export default Card;