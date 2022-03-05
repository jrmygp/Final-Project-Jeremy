import { useState } from "react"
import ContentCard from "./component/ContentCard/ContentCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/Email-sign-up.css";
import SignUp from "./component/Email-sign-up/SignUp";
import axios from "axios";
import { Box, Button } from "@chakra-ui/react";

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

  return (
    <Box paddingY="8" marginLeft={20}>
      <Button marginBottom="4" onClick={fetchContentList} backgroundColor="black" color="rgb(8, 223, 8)">
        Fetch Posts
      </Button>
      {renderContentList()}
    </Box>
  );
}

export default App;
