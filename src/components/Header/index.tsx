import { Flex, Icon, IconButton, Link as ChakraLink, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FiMoon, FiSun, FiChevronLeft } from "react-icons/fi";
import Link from "next/link";

interface HeaderProps {
  previousHome?: boolean;
}

export function Header({ previousHome = false }: HeaderProps) {
  const { colorMode, toggleColorMode } = useColorMode()

  const colorText = useColorModeValue("dark.head", "white")

  return (
    <Flex
      as="header"
      w="100%"
      h="100px"
      mx="auto"
      px="4"
      align="center"
      justifyContent="center"
    >
      <Flex w="100%" maxW={1440} align="center" justifyContent="space-between">
        {previousHome 
          ? 
           <Link href='/' passHref>
             <ChakraLink>
              <Icon fontSize="32" color={colorText} as={FiChevronLeft} />
             </ChakraLink>
           </Link> 
          : <Flex />
        }
        <Image objectFit="cover" src="/assets/Logo.svg" alt="logo" />
        <IconButton
          aria-label="dark mode"
          icon={colorMode === "light" ? <Icon as={FiMoon} /> : <Icon as={FiSun} color="highlight"/> }
          onClick={toggleColorMode}
          fontSize="24"
          variant="unstyled"
        ></IconButton>
      </Flex>
    </Flex>
  );
}