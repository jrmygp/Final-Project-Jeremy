import { useState, useEffect } from "react";
import ContentCard from "./component/ContentCard/ContentCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/Email-sign-up.css";
import SignUp from "./component/Email-sign-up/SignUp";
import axios from "axios";
import { Box, Button } from "@chakra-ui/react";
import Nav from "./component/Nav/Nav";

function App() {
  const [contentList, setContentList] = useState([]);

  const fetchContentList = () => {
    axios.get("http://localhost:2000/posts").then((res) => {
      setContentList(res.data);
    });
  };

  const renderContentList = () => {
    return contentList.map((val) => {
      return (
        <ContentCard
          username={val.username}
          caption={val.caption}
          imageUrl={val.image_url}
          location={val.location}
          numberOfLikes={val.number_of_likes}
          id={val.id}
        />
      );
    });
  };

  useEffect(() => {
    fetchContentList()
  }, [])

  // useEffect(() => {
  //   alert("terjadi perubahan state")
  // }, [username])

  return (
    <Box display="flex">
      <Nav/>

      <Box paddingY="1" marginLeft={20}>
        {renderContentList()}
      </Box>
    </Box>
  );
}

export default App;
