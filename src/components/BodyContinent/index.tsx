import { Flex, HStack, Icon, IconButton, Stack, Text, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Header } from "../Header";
import { IconInfo } from "../IconInfo";
import { FiInfo } from "react-icons/fi";
import { CityCard } from "../CityCard";
import { useContext } from "react";
import { ContinentsContext } from "../../../ContinentsContext";

export function BodyContinent() {
  // const { continents, createContinent } = useContext(ContinentsContext)
  const { colorMode, toggleColorMode } = useColorMode()

  // console.log(continents);

  const colorText = useColorModeValue("dark.head", "white")

  return (
    <>
      <Header previousHome={true} />
      <Flex //Banner
        w="100%"
        h="500px"
        backgroundImage="url('/assets/europe_banner.png')"
        backgroundPosition="center"
        backgroundSize="cover"
       >
        <Stack
          w="100%"
          maxW={1440}
          mx="auto"
          px="4"
          pb="12"
          justifyContent="flex-end"
         >
           <Text
             fontWeight="600"
             fontSize="5xl"
             lineHeight="72px"
             color={colorMode === 'light' ? 'white' : ''}
             >
               Europa
           </Text>
        </Stack>
      </Flex> {/* Banner */}

      <HStack
        w="100%"
        maxW={1440}
        mx="auto"
        my="20"
        px="4"
        spacing="8"
      >
        <Flex
          w="50%"
        >
          <Text fontSize="2xl" lineHeight="9" textAlign="justify" color={colorText} >A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, 
            a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, 
            o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Flex>

        <Flex
          flex="1"
          justifyContent="space-between"
        >
          <IconInfo marginLeft="4.375rem" description="países" textImg="50" />
          <IconInfo description="línguas" textImg="60" />
          <IconInfo description="cidades +100" textImg="27">
            <Tooltip hasArrow label="Saiba mais" fontSize="md">
              <IconButton
                aria-label="more info"
                variant="unstyled"
                pb="1"
                icon={
                  <Icon as={FiInfo} />
                }
              >
              </IconButton>
            </Tooltip>
          </IconInfo>
        </Flex>

      </HStack>

      <Stack
        w="100%"
        maxW={1440}
        mx="auto"
        mb="35px"
        px="4"
        spacing="10"
       >
         <Text fontSize="4xl" fontWeight="medium" lineHeight="54px">Cidades +100</Text>
         
         <HStack spacing="12" justifyContent="space-between">
          <CityCard />
          <CityCard />
          <CityCard />
          <CityCard />
         </HStack>

         <HStack spacing="12" justifyContent="space-between">
          <CityCard />
         </HStack>
      </Stack>

    </>
  )
}