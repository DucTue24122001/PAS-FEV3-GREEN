import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Slider from 'react-slick'
import slide1 from "../../public/images/slide1.jpg"
import slide2 from "../../public/images/slide2.jpg"
import slide3 from "../../public/images/slide3.jpg"
import slide4 from "../../public/images/slide4.jpg"
import slide5 from "../../public/images/slide5.jpg"

const HomeSlider = () => {
  return (
    <Box>
      <Slider dots={true} infinite={true} slidesToScroll={1} slidesToShow={1} arrows={false} className='home-slider'
        appendDots={(dots) => (
          <Box pos={"absolute"} top={"78%"}>
            {dots}
          </Box>
        )}>
        {sliderDummy.map((item, i) => (
          <Flex key={i} bgColor={"black"} >
            <Image w={"100%"} h={"230px"} src={item.image} objectFit={"contain"} alt={"gift"} />
          </Flex>
        ))}
      </Slider>
    </Box>
  )
}

export default HomeSlider

const sliderDummy = [
  {image:slide1.src},
  {image:slide2.src},
  {image:slide3.src},
  {image:slide4.src},
  {image:slide5.src},
]