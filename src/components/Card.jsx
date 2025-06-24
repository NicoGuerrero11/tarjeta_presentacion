import React from 'react';

const Card = ({name, image, description}) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 w-64 mx-auto hover:scale-105 transition-transform">
            <img src={image} alt={name} className="w-full h-40 object-cover rounded-md"/>
            <h2 className="text-xl font-bold mt-3 text-center">{name}</h2>
            <p className="text-gray-600 mt-2 text-sm text-center">{description}</p>
        </div>
    );
};

export default Card;