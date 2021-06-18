import { Flex, Icon, IconButton, Stack, Wrap, Text, Tooltip, useColorMode, useColorModeValue, Box } from "@chakra-ui/react";
import { Header } from "../../src/components/Header";
import { FiInfo } from "react-icons/fi";
import { IconInfo } from "../../src/components/IconInfo";
import { CityCard } from "../../src/components/CityCard";
import { GetStaticPaths, GetStaticProps } from "next";
import { useContext } from "react";
import { ContinentsContext } from "../../ContinentsContext";

interface ContinentProps {
  slug: string;
}

export default function Continent({ slug }: ContinentProps) {
  const { continents } = useContext(ContinentsContext)
  
  const { colorMode } = useColorMode()

  const continent = continents.filter((data) => {
    if (data.title === slug) {
      return data;
    }
  })

  const colorText = useColorModeValue("dark.head", "white")

  return (
    <>
     {continent.map(continentSelected => (
      <Box key={continentSelected.id}>
      <Header previousHome={true} />
      <Flex
        w="100%"
        h="500px"
        backgroundImage={`url(${continentSelected.bannerSlug})`}
        backgroundPosition="center"
        backgroundSize="cover"
       >
        <Stack
          w="100%"
          maxW={1440}
          mx="auto"
          px="4"
          pb="12"
          justifyContent={{ base: "center", md: "flex-end"}}
          alignItems={{base: "center", md:"stretch"}}
         >
          <Text
            fontWeight="600"
            fontSize="5xl"
            lineHeight="72px"
            color={colorMode === 'light' ? 'white' : ''}
            >
            {continentSelected.title}
          </Text>
        </Stack>
      </Flex>
      <Stack
        w="100%"
        maxW={1440}
        mx="auto"
        my={["10","20"]}
        px="4"
        spacing="8"
        direction={{base:"column", lg:"row"}}
      >
        <Flex
          w={{base:"100%", lg:"50%"}}
        >
          <Text fontSize={{base:"lg", lg:"2xl"}} lineHeight="9" textAlign="justify" color={colorText} >
          {continentSelected.description}
          </Text>
        </Flex>

        <Flex
          flex="1"
          justifyContent="space-between"
        >
          <IconInfo marginLeft={{base:"0", lg:"4.375rem"}} description="países" textImg={String(continentSelected.country)} />
          <IconInfo description="línguas" textImg={String(continentSelected.language)} />
          <IconInfo description="cidades +100" textImg={String(continentSelected.city)}>
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
      </Stack>
      <Stack
        maxW={{base: 300, md: 608, lg: 1000, "2xl": 1440}}
        mx="auto"
        mb="35px"
        px="4"
        spacing="10"
       >
         <Text fontSize="4xl" fontWeight="medium" lineHeight="54px">Cidades +100</Text>
         <Wrap spacing="16" justifyContent="center">
                <CityCard cardInfo={continentSelected.cardInfo} />
         </Wrap>
      </Stack>
</Box>
))}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return{
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  return {
    props: {
      slug
    }
  }
}
