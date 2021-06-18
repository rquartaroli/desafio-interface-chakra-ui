import { Box, Image, HStack, Flex, Avatar, useColorModeValue, WrapItem } from "@chakra-ui/react";

interface CityCardProps {
  cardInfo?: ModelCityCardProps
}

type ModelCityCardProps = [{
  cityTitle: string,
  countryTitle: string,
  imgCity: string,
  imgFlag: string
}]

export function CityCard({ cardInfo }:CityCardProps) {
  const colorText = useColorModeValue("dark.head", "white")

  return (
    <>
      {cardInfo.map(card => {
        return (
        <WrapItem key={card.cityTitle}>
          <Box maxW="2xs" borderRadius="lg" overflow="hidden">
            <Image w="64" h="44" src={card.imgCity} alt={card.cityTitle} />

            <Box p="5" borderWidth="1px" borderColor="highlight" borderBottomStartRadius="lg" borderEndEndRadius="lg" >
              <HStack>
                <Flex flexDirection="column">
                  <Box
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                    color={colorText}
                  >
                      {card.cityTitle}
                  </Box>

                  <Box as="span" mt="3" fontSize="sm" color="dark.info">
                    {card.countryTitle}
                  </Box>

                </Flex>

                <Flex flex="1" flexDirection="column" alignItems="flex-end" >
                  <Avatar size="sm" name={card.countryTitle} src={card.imgFlag} />
                </Flex>
              </HStack>
            </Box>
          </Box>
        </WrapItem>)
      })}
    </>
  )
}