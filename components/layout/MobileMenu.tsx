import { Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import homeIco from "../../public/images/Home.png"
import promoIco from "../../public/images/Promotion.png"
import walletIco from "../../public/images/Wallet.png"
import contactIco from "../../public/images/ContactUs.png"
import userIco from "../../public/images/Profile.png"
import ClientService from '../../http-client/ClientService'
import { useRouter } from 'next/router'
import { checkDisableLayoutPage } from '../../util/function'
import { useTranslation } from 'react-i18next'

const MobileMenu = () => {
	const isLogin = ClientService.isAuthenticated();
	const router = useRouter()
	const {t} = useTranslation()

	const directRouter = (url: string) => {
    if (isLogin) {
      router.push(url);
    } else {
      router.push("/login")
    }
  };

  return (
    <Flex pos={"fixed"} bgGradient={"linear(#000b97, #00075c, #000435)"} bottom={0} zIndex={1000}
    	boxShadow={"0 0 5px #4956ff"} left={0} w={"100%"} display={checkDisableLayoutPage(router.pathname) ? "none" : "flex"}>
			{mobileMenuItems.map((item, i) => (
				<Center sx={menuItemContainer} key={i} onClick={() => {
					if (item.needAuth) {
						directRouter(item.src)
					} else {
						router.push(item.src)
					}
				}}>
					<Image alt={item.title} src={item.icon} sx={imgMenu}/>
					<Text sx={textMenu}>{t(`${item.title}`)}</Text>
				</Center>
			))}
    </Flex>
  )
}

export default MobileMenu

const mobileMenuItems = [
	{
		icon: homeIco.src,
		title: "home",
		src: "/",
		needAuth: false,
	},
	{
		icon: promoIco.src,
		title: "promotion",
		src: "/promo",
		needAuth: false,
	},
	{
		icon: walletIco.src,
		title: "wallet",
		src: "/wallet",
		needAuth: true,
	},
	{
		icon: contactIco.src,
		title: "contact_us",
		src: "/contact",
		needAuth: false,
	},
	{
		icon: userIco.src,
		title: "profile",
		src: "/profile",
		needAuth: true,
	},
]

const menuItemContainer = {
	p:"6px 4px",
	flexDir:'column',
	w: "20%",
	cursor: "pointer",
	transition: ".3s",
	_hover: {
		bg: "#000549",
		filter: "brightness(1.2) drop-shadow(0 0 2px #0013f9)"
	}
}

const imgMenu = {
	boxSize: "30px",
	objectFit: "contain",
}

const textMenu = {
	fontSize: "11px",
	color: "#fff",
	textShadow: "0 0 4px #e6e7ff",
	mt: "2px",
}