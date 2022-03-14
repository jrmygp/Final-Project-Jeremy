import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Button, Icon, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs"

const NavTop = () => {
  const userSelector = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const logoutBtnHandler = () => {
    dispatch({
      type: "USER_LOGOUT",
    });

    localStorage.removeItem("user_data");
  };

  return (
    <Box
      display="flex"
      flexDir="row"
      justifyContent="space-between"
      borderBottom="1px solid white"
      padding="7px"
      position="sticky"
      top="0"
      zIndex="999"
    >
      <Box paddingLeft="50px" paddingTop="5px">
        <Link to="/" style={{ textDecoration: "none" }}>
          ( INI WEBSITE GUA )
        </Link>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Input w="50" marginRight="10px"/>
        <Icon as={BsSearch} fontSize="xl"/>
      </Box>
      <Box paddingRight="50px">
        <Link to="/LoginPage">
          <Button onClick={logoutBtnHandler} colorScheme="red">
            Logout
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default NavTop;
