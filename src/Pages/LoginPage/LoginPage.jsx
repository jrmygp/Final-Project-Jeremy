import { Box, Button, Center, FormLabel, Input, Text } from "@chakra-ui/react";
import { axiosInstance } from "../../configs/api"
import { useState } from "react";

const LoginPage = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [userData, setUserData] = useState({});

  const inputHandler = (event, field) => {
    const { value } = event.target;
    if (field === "username") {
      setUsernameInput(value);
    } else if (field === "password") {
      setPasswordInput(value);
    }
  };

  const loginBtnHandler = () => {
    axiosInstance
      .get("/user_accounts", {
        params: {
          username: usernameInput,
          password: passwordInput,
        },
      })
      .then((res) => {
        setUserData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Center mt={10}>
      <Box maxWidth="lg"
      color="#3CFF00">
        <Text>Login Page</Text>
        <Text>Logged in user: {userData?.username}</Text>
        <FormLabel>Username</FormLabel>
        <Input onChange={(event) => inputHandler(event, "username")} />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          onChange={(event) => inputHandler(event, "password")}
        />
        <Button onClick={loginBtnHandler} backgroundColor="black">Login</Button>
      </Box>
    </Center>
  );
};

export default LoginPage;
