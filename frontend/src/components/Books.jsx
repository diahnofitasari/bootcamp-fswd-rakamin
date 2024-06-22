import { Card, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link to={`/books/${id}`}>
    <Card key={id} my={4} p={4} cursor="pointer" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <VStack spacing={4} align="start">
        <Image w={150} h={200} objectFit="cover" src={`http://localhost:8000/${image}`} alt={`${title} cover`} />
        <Heading size="md" noOfLines={1}>
          {title} ({year})
        </Heading>
        <Text fontSize="sm" color="gray.600">{author}</Text>
        <Text fontSize="sm" color="gray.600">
          <strong>Publisher:</strong> {publisher}
        </Text>
      </VStack>
    </Card>
    </Link>
  );
}

