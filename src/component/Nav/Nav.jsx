import { useState } from "react";
import {
  Avatar,
  Flex,
  Divider,
  Heading,
  Text,
  IconButton,
  background,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg"
import { IoMdSettings } from "react-icons/io"
import { GrUploadOption } from "react-icons/gr"
import { BsThreeDotsVertical } from "react-icons/bs"
import { HiLogout } from "react-icons/hi"
import NavItems from "../Nav/NavItems"

const Nav = () => {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      position="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.2)"
      borderRadius={navSize == "small" ? "15px" : "30px"}
      w={navSize == "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav" alignItems="center">
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<BsThreeDotsVertical />}
          onClick={() => {
            if (navSize == "small") {
              changeNavSize("large");
            } else {
              changeNavSize("small");
            }
          }}
        />
        <NavItems navSize={navSize} icon={FaHome} title="Dashboard" description=""/>
        <NavItems navSize={navSize} icon={CgProfile} title="Your Profile"/>
        <NavItems navSize={navSize} icon={GrUploadOption} title="Upload Memes"/>
        <NavItems navSize={navSize} icon={IoMdSettings} title="Settings"/>
        <NavItems navSize={navSize} icon={HiLogout} title="Logout"/>
      </Flex>

      <Flex
        padding="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar
            src="https://i.quotev.com/img/q/u/12/06/08/2952594-killua.jpg"
            size="sm"
          />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize == "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              Admin
            </Heading>
            <Text color="gray">Moderator</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;
