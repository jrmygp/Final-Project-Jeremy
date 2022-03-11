import { useState } from "react";
import {
  Avatar,
  Flex,
  Divider,
  Heading,
  Text,
  IconButton,
  background,
  LinkBox,
  textDecoration,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";
import { BsPlusSquareFill } from "react-icons/bs";
import NavItems from "../Nav/NavItems";
import { Link } from "react-router-dom";

const Nav = () => {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      position="sticky"
      top="5"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.2)"
      backgroundColor="black"
      color="#3CFF00"
      borderRadius={navSize === "small" ? "15px" : "30px"}
      w={navSize === "small" ? "75px" : "200px"}
      flexDir="column"
      justifyContent="space-between"
      border="1px solid white"
    >
      <Flex
        p="5%"
        flexDir="column"
        as="nav"
        marginTop="30px"
        backgroundColor="black"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: "none" }}
          icon={<BsThreeDotsVertical />}
          onClick={() => {
            if (navSize === "small") {
              changeNavSize("large");
            } else {
              changeNavSize("small");
            }
          }}
        />
        <Link to="/" style={{ textDecoration: "none" }}>
          <NavItems
            navSize={navSize}
            icon={FaHome}
            title="Home"
            description=""
          />
        </Link>

        <Link to="/ProfilePage">
          <NavItems navSize={navSize} icon={CgProfile} title="Your Profile" />
        </Link>

        <Link to="/UploadPage">
          <NavItems
            navSize={navSize}
            icon={BsPlusSquareFill}
            title="Upload Memes"
          />
        </Link>

        <Link to="/Settings">
          <NavItems navSize={navSize} icon={IoMdSettings} title="Settings" />
        </Link>

        <Link to="/LoginPage">
          <NavItems navSize={navSize} icon={HiLogout} title="Logout" />
        </Link>
      </Flex>

      <Flex
        padding="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize === "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar
            src="https://i.quotev.com/img/q/u/12/06/08/2952594-killua.jpg"
            size="sm"
          />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
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
