import React from 'react';
import Card from './components/Card.jsx';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';

const persons = [
    {
        name: "nicolas",
        image: "https://via.placeholder.com/150",
        description: "web development",
    },
    {
        name: "gabriela",
        image: "https://via.placeholder.com/150",
        description: "student",
    },
    {
        name: "Agustina",
        image: "https://via.placeholder.com/150",
        description: "student",
    },
    {
        name: "Marcelo",
        image: "https://via.placeholder.com/150",
        description: "business",
    },
    {
        name: "Maritza",
        image: "https://via.placeholder.com/150",
        description: "loving god",
    },

];

const App = () => {
    return(
        <Box minH="100vh" bg="gray.50" py="10" px="6">
            <Heading textAlign="center" color="purple.600" mb="8">
                Presentation Card
            </Heading>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing="6">
                {persons.map((person, index) => (
                    <Card key={index} {...person} />
                ))}
            </SimpleGrid>
        </Box>
    )
};

export default App;