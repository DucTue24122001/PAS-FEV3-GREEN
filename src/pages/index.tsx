import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import slide1 from "../../public/images/slide1.jpg"
import slide2 from "../../public/images/slide2.jpg"
import slide3 from "../../public/images/slide3.jpg"
import slide4 from "../../public/images/slide4.jpg"
import slide5 from "../../public/images/slide5.jpg"
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots:true,
    infinity:true,
    autoplay:true,
    slidesToShow:1,
    slidesToScroll:1
  }
  return (
    <Flex>
      <Box>
        <Slider {...settings}>
          {sliderDummy.map((item, i) => (
            <Flex key={i}>
              <Image w={"100%"} h={"200px"} src={item.image} objectFit={"contain"} alt={"gift"} />
            </Flex>
          ))}
        </Slider>
      </Box>
    </Flex>
  )
}
const sliderDummy = [
  {image:slide1.src},
  {image:slide2.src},
  {image:slide3.src},
  {image:slide4.src},
  {image:slide5.src},
]
