import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard
} from "swiper/core";
import { Flex, Link, useColorMode } from "@chakra-ui/react";
import { useContext } from "react";
import { ContinentsContext } from "../../../ContinentsContext";

SwiperCore.use([Autoplay, Navigation, Pagination, Mousewheel, Keyboard]);

export function Slider() {
  const { continents } = useContext(ContinentsContext)

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          "clickable": true
        }}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        // onSlideChange={() => console.log("slide change")}
        // onClick={() => console.log("legal")}
        className="mySwiper"
      >
      {continents.map(continent => {
          return (
            <SwiperSlide key={continent.id}>
              <Flex 
                flexDirection="column"
                w="100%"
                h="368px"
                align="center"
                justifyContent="center"
                mx="auto"
                backgroundImage={`url(${continent.imageSlide})`}
                backgroundPosition="center"
                backgroundSize="cover"
                >
                <Link
                  fontSize="5xl"
                  fontWeight="700"
                  lineHeight="7xl"
                  href={`/continent/${continent.title}`}
                  color={colorMode === "light" ? "White" : ""}
                  >
                    {continent.title}
                </Link>
                <Link
                  fontSize="2xl"
                  fontWeight="700"
                  lineHeight="4xl"
                  href={`/continent/${continent.title}`}
                  color={colorMode === "light" ? "White" : ""}
                  >
                    {continent.soonDescription}
                </Link>
              </Flex>
            </SwiperSlide>
          )
        })}
      </Swiper>
  );
}