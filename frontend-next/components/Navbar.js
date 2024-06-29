"use client";

import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    useDisclosure,
    useToast,
    VStack,
  } from "@chakra-ui/react";
  import { useEffect, useState } from "react";
  import Link from "next/link";
  import { useRouter } from "next/router";
  import { loginUser } from "../modules/fetch";
  
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isLogin, setIsLogin] = useState(false);
    const toast = useToast();
    const router = useRouter();
  
    useEffect(() => {
      const token = window.localStorage.getItem("token");
      if (token) {
        setIsLogin(true);
      }
    }, []);
  
    return (
      <Flex
        w="full"
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="1rem"
        bg="teal.500"
        color="white"
      >
        <Link href="/" passHref>
          <Flex align="center" mr={5} cursor="pointer" as="a">
            <Text fontSize="xl" fontWeight="bold">
              My Website
            </Text>
          </Flex>
        </Link>
        <HStack>
          {isLogin && (
            <Link href="/newbook" passHref>
              <Button colorScheme="blackAlpha" as="a">
                Create New Book
              </Button>
            </Link>
          )}
          {!isLogin ? (
            <Button onClick={onOpen} colorScheme="blue">
              Login
            </Button>
          ) : (
            <Button
              colorScheme="blue"
              onClick={() => {
                window.localStorage.removeItem("token");
                setIsLogin(false);
                router.push("/");
              }}
            >
              Logout
            </Button>
          )}
        </HStack>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <form
            id="login-form"
            onSubmit={async (e) => {
              e.preventDefault();
              try {
                const token = await loginUser(
                  e.target.email.value,
                  e.target.password.value
                );
                window.localStorage.setItem("token", token.token);
                router.push("/");
                onClose();
              } catch (err) {
                toast({
                  title: "Error",
                  description: err.message,
                  status: "error",
                  duration: 3000,
                  isClosable: true,
                });
              }
            }}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Login</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <VStack>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                    />
                  </FormControl>
                </VStack>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" form="login-form" colorScheme="blue" mr={3}>
                  Login
                </Button>
                <Link href="/register" passHref>
                  <Button variant="ghost" as="a" onClick={onClose}>
                    Doesn't Have Account? Click here
                  </Button>
                </Link>
              </ModalFooter>
            </ModalContent>
          </form>
        </Modal>
      </Flex>
    );
  };
  
  export default Navbar;
  