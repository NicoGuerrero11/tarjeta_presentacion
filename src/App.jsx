import React from 'react';
import Card from './components/Card.jsx';

const persons = [
    {
        name: "nicolas",
        image: "nicolas.png",
        description: "web development"
    },
    {
        name: "gabriela",
        image: "gabriela.png",
        description: "student"
    },
    {
        name: "Agustina",
        image: "agus.png",
        description: "student"
    },
    {
        name: "Marcelo",
        image: "marce.png",
        description: "business"
    },
    {
        name: "Maritza",
        image: "mar.png",
        description: "loving god"
    },

];

const App = () => {
    return(
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Presentation Card</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                {persons.map((person, index) => (
                    <Card
                        key ={index}
                        name={person.name}
                        image={person.image}
                        description={person.description}
                    />
                ))}
            </div>
        </div>
    )
};

export default App;