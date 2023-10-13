import { Box, Flex, Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import httpClient from '../../http-client/httpClient'
import { useTenancy } from '../../hook/TenancyProvider'

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
          <Box pos={"absolute"} top={["70%","70%","85%","85%"]}>
            {dots}
          </Box>
        )}>
        {slider.map((item, i) => (
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