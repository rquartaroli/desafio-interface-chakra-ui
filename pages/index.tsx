import { Divider, Flex, HStack, Image, Stack, Text, useBreakpointValue, useColorMode, useColorModeValue } from "@chakra-ui/react";

import { Header } from "../src/components/Header";
import { IconInfo } from "../src/components/IconInfo";

import { Slider } from '../src/components/Slider';

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const { colorMode } = useColorMode()

  const colorText = useColorModeValue("dark.head", "white")

  return (
    <>
      <Header />
      <Flex
        w="100%"
        h="368px"
        align="center"
        mx="auto"
        backgroundImage="url('/assets/Background.png')"
        backgroundPosition="center"
        backgroundSize="cover"
       >
        <HStack
          maxW={1440}
          mx="auto"
          px="4"
          justifyContent="space-between"        
        >
          <Flex flexDirection="column">
              <Text
                fontSize={["3xl","4xl"]}
                fontWeight="500"
                lineHeight="5xl"
                color={colorMode === "light" ? "White" : ""}
              >
                5 Continentes,<br/>infinitas possibilidades.
              </Text>
              <Text
                fontSize={["md","xl"]}
                fontWeight="400"
                lineHeight="3xl"
                color={colorMode === "light" ? "White" : ""}
              >
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
          </Flex>
          {isWideVersion && (
            <Flex flexDirection="column">
              <Image
                objectFit="cover"
                src="/assets/Airplane.svg"
                alt="airplane"
                mt="36"
              />
            </Flex>
          )}
          
        </HStack>
      </Flex>
      
      <Flex
        w="100%"
        maxW={1440}
        mt="32"
        mx="auto"
        px="4"
        align="center"
       >
        <Stack
          w="100%"
          direction={["column","row"]}
          spacing={["12", "1"]}
          justifyContent="space-between"
         >
          <IconInfo description="vida noturna" pathImagem="/assets/cocktail.svg" />
          <IconInfo description="praia" pathImagem="/assets/surf.svg" />
          <IconInfo description="moderno" pathImagem="/assets/building.svg" />
          <IconInfo description="clássico" pathImagem="/assets/museum.svg" />
          <IconInfo description="E mais..." pathImagem="/assets/earth.svg" />
        </Stack>
      </Flex>

      <Divider
        w="90px"
        mt="20"
        mx="auto"
        border="2px"
        borderColor={colorText}      
      />

      <Flex w="100%" maxW={1440} mx="auto" my="14" justifyContent="center" >
        <Text fontSize="4xl" fontWeight="500" textAlign="center" color={colorText} >Vamos nessa?<br/>Então escolha seu continente</Text>
      </Flex>

      <Flex w="100%" maxW={1440} mx="auto" h="96" mb="10" justifyContent="center" >
        <Slider  />
      </Flex>
    </>
  )
}
