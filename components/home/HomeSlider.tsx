import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import httpClient from '../../http-client/httpClient'
import { useTenancy } from '../../hook/TenancyProvider'
import slider1 from "../../public/images/PAS_Banner01.jpg"
import slider2 from "../../public/images/PAS_Banner02.jpg"
import slider3 from "../../public/images/PAS_Banner03.jpg"

const HomeSlider = () => {
  const [slider, setSlider] = useState<ImgSlider[]>([])
  const tenancy = useTenancy()
  
  useEffect(() => {
    (async () => {
      try {
        const slider: any = await httpClient.post(
          "/services/app/slider/GetAllSlider",
          {
            tenancyName: tenancy?.tenancyName,
          }
        );
        setSlider(slider.result);
      } catch (err) {
        console.log(err);
      }
    })();
}, [tenancy]);

  return (
    <Box>
      <Slider dots={true} infinite={true} slidesToScroll={1} slidesToShow={1} arrows={false} className='home-slider'
        appendDots={(dots) => (
          <Box pos={"absolute"} top={["70%","70%","85%","85%"]} h={'10px'}>
            {dots}
          </Box>
        )}>
        {defaultSlider.map((item, i) => (
          <Flex key={i} bgColor={"black"} outline={"none"}>
            <Image w={"100%"} maxH={"250px"} src={item.imageUrl} objectFit={"contain"} alt={item.title} />
          </Flex>
        ))}
      </Slider>
    </Box>
  )
}

export default HomeSlider

type ImgSlider = {
  category: string,
  displayNumber: number,
  id: number,
  imageUrl: string,
  imageUrlMobile: string,
  title: string
}

const defaultSlider = [
  {imageUrl: slider1.src, title: "1"},
  {imageUrl: slider2.src, title: "2"},
  {imageUrl: slider3.src, title: "3"}
]