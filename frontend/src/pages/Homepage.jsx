import { VStack, Box, Grid, Heading, Flex, Spacer, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import Books from "../components/Books";
import { getAllBooks } from "../modules/fetch";
import Hero from "../components/Hero";
 


export default function Homepage() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      const books = await getAllBooks();
      setBooks(books);
    };
    fetchBooks();
  }, []);

  return (
    <VStack w="100vw">
      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <Box w="100%" maxW="1200px" mx="auto" p={4}>
        <Heading mb={6}>Daftar Buku</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
          {books?.books?.map((book) => (
            <Books key={`${book.id} ${book.title}`} {...book} />
          ))}
        </Grid>
      </Box>
    </VStack>
  );
}
