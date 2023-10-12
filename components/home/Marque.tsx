import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import httpClient from "../../http-client/httpClient";
import { useTenancy } from "../../hook/TenancyProvider";
import { AnnouncementType } from "../../util/type";

const Marque = () => {
  const [announce, setAnnounce] = useState<AnnouncementType[]>([])
  const tenancy = useTenancy()

  useEffect(() => {
    (async () => {
      try {
        const announce: any = await httpClient.post(
          "/services/app/announcement/ListAnnouncementUser",
          {
            tenancyName: tenancy?.tenancyName,
          }
        );
        console.log(announce.result);
        setAnnounce(announce.result);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [tenancy])
  

  return (
    <Flex h={"30px"} lineHeight={"30px"} w={"100%"}>
      {announce.length > 0 && <Marquee speed={40} style={{color:"#f5ffe1", fontSize:"13px"}}>
        {announce.map((item, i) => (
          <Text key={i} ml={"40px"}>{item.title}: {item.body}</Text>
        ))}
      </Marquee>}
    </Flex>
  );
};

export default Marque;
