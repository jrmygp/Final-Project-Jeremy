import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import NavHoverBox from "../Nav/NavHoverBox"

const NavItems = ({ navSize, icon, title, active, description }) => {
  return (
    <Flex
      mt={30}
      flexDir="column"
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
        backgroundColor={active && "#AEC8CA"}
        p={3}
        borderRadius={8}
        _hover={{textDecor: "none", backgroundColor: "#AEC8CA"}}
        w={navSize == "large" && "100%"}>
          <MenuButton w="100%">
            <Flex>
              <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "#3CFF00" }/>
              <Text ml={4} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
        {/* <MenuList
        py={0}
        border="none"
        w={200}
        h={200}
        ml={6}
        boxShadow="0 4px 12px 0 rgba(0,0,0,0.2)">
            <NavHoverBox title={title} icon={icon} description={description}/>
        </MenuList> */}
      </Menu>
    </Flex>
  );
};
export default NavItems;
