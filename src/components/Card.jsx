import React from 'react';
import { Box, Heading, Image, Text} from '@chakra-ui/react';

const Card = ({name, image, description}) => {
    return(
        <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="4"
            shadow="md"
            textAlign="center"
        >
            <Image src={image} alt={name} mx="auto" borderRadius="md" />
            <Heading size="md" mt="3">{name}</Heading>
            <Text mt="2" color="gray.600">{description}</Text>
        </Box>
    )
};

export default Card;