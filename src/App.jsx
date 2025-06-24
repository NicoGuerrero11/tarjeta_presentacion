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
        <>
            <h1>Presentation Card</h1>
            {persons.map((person, index) => (
                <Card
                    key ={index}
                    name={person.name}
                    image={person.image}
                    description={person.description}
                />
            ))}
        </>
    )
};

export default App;