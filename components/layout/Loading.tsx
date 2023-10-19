import { Flex, Image } from "@chakra-ui/react";
import { Router, useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Loading = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      if (router.asPath !== url) {
        setIsLoading(true);
      } else {
        setIsLoading(false);
      }
    });
    Router.events.on("routeChangeComplete", (url) => {
        setIsLoading(false);
      });
    
      Router.events.on("routeChangeError", (url) => {
        setIsLoading(false);
      });
  },[router]);

  
  return (
    <>
      {isLoading ? (
        <Flex
          w={"100%"}
          h={"100%"}
          textAlign={"center"}
          pos={"fixed"}
          background={"#0005"}
          zIndex={9999999}
          top={0}
          left={0}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Image
            className="cssload-loader"
            w={"100px"}
            opacity={0.6}
            src={"/images/loading1.gif"}
            alt="gift"
          />
        </Flex>
      ) : (
        <></>
      )}
    </>
  );
};

export default Loading;
