import { Flex, Image, Text, useColorModeValue, FlexProps } from "@chakra-ui/react";

interface IconInfoProps extends FlexProps {
  description: string;
  pathImagem?: string;
  textImg?: string;
}

export function IconInfo({ children, description, pathImagem, textImg, ...rest }: IconInfoProps) {
  const colorText = useColorModeValue("dark.head", "white")
  
  return (
    pathImagem 
    ? <Flex direction="column" >
        <Image
          w={["85px","70px","85px"]}
          h={["85px","70px","85px"]}
          mb={["2","6"]}
          alignSelf="center"
          src={pathImagem}
          alt="Night life"
        />
        <Text
          as="label"
          align="center"
          fontSize={["lg","1xl","2xl"]}
          fontWeight="600"
          color={colorText}
        >
          {description}</Text>
      </Flex> 
    : <Flex {...rest} direction="column" >
        <Text
          align="center"
          fontSize="5xl"
          fontWeight="semibold"
          lineHeight="4.5rem"
          color="highlight"
         >
          {textImg}
        </Text>
        <Text
          as="label"
          align="center"
          fontSize={{base:"lg", xl:"2xl"}}
          fontWeight="600"
          lineHeight="9"
          color={colorText}
        >
          {description}
          {children}
        </Text>
      </Flex>
  );
}