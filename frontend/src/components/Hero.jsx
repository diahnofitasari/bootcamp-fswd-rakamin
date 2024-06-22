import React from "react";
import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import heroImage from "../assets/hero-image.png"; 

const Hero = () => {
    return (
      <Box
        w="100%"
        h="70vh"
        bgImage={`url(${heroImage})`}
        bgSize="cover"
        bgPosition="center"
        position="relative"
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          h="100%"
          bg="rgba(0, 0, 0, 0.3)" 
          color="white"
          textAlign="center"
        >
          <VStack spacing={4} textShadow="1px 1px 2px black">
          </VStack>
        </Flex>
      </Box>
    );
  };
  
  export default Hero;
