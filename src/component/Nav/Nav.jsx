import { useState, useEffect } from "react";
import {
  Avatar,
  Flex,
  Divider,
  Heading,
  Text,
  IconButton,
  Button,
  MenuList,
} from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { HiLogout } from "react-icons/hi";
import { BsPlusSquareFill } from "react-icons/bs";
import NavItems from "../Nav/NavItems";
import { Link } from "react-router-dom";
import { axiosInstance } from "../../configs/api";
import { useDispatch, useSelector } from "react-redux";
import NavHoverBox from "./NavHoverBox";

const Nav = () => {
  const [navSize, changeNavSize] = useState("large");
  // const [userData, setUserData] = useState({})
  // const fetchUserData = () => {
  //   axiosInstance.get("/users")
  //   .then((res) => {
  //     setUserData(res.data)
  //     console.log(res.data)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }
  // useEffect(() => {
  //   fetchUserData()
  // }, [])
  const userSelector = useSelector((state) => state.user);

  return (
    <Flex
      position="sticky"
      top="5"
      left="5"
      h="90vh"
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

        <Link to="/MyProfilePage">
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
          <Avatar src={userSelector.profile_picture} size="sm" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === "small" ? "none" : "flex"}
          >
            <Heading as="h3" size="sm">
              {userSelector.username}
            </Heading>
            <Text color="gray">{userSelector.usertag}</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;
