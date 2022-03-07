import { Box, Text, Avatar, Icon, Center, Image, Flex } from "@chakra-ui/react";
import { GoVerified } from "react-icons/go";
import { MdOutlinePhotoCamera } from "react-icons/md"

const ProfilePage = () => {
  return (
    <Center>
      <Box
        w="95vh"
        h="95vh"
        backgroundColor="black"
        marginLeft={5}
        marginTop={5}
        borderRadius="lg"
      >
        <Box
          paddingTop={5}
          paddingLeft={5}
          paddingBottom={5}
          margin={2}
          border="1px solid #3CFF00"
          color="#3CFF00"
          display="flex"
          alignItems="center"
          borderRadius="lg"
        >
          <Avatar
            src="https://i.quotev.com/img/q/u/12/06/08/2952594-killua.jpg"
            size="xl"
          />

          <Box
            display="flex"
            flexDirection="column"
            marginLeft={50}
            fontSize="3xl"
          >
            <Box display="flex" alignItems="center">
              <Text>Admin Killua</Text>
              <Icon as={GoVerified} ml={2} boxSize={4} />
            </Box>
            <Text fontSize="lg">@AdmnKillua</Text>
            <Box display="flex" fontSize="sm" marginTop={5}>
              <Text marginRight={2}>3 Post</Text>
              <Text marginRight={2}>0 Followers</Text>
              <Text marginRight={2}>0 Ratings</Text>
            </Box>
          </Box>
        </Box>
        <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="#3CFF00"
        paddingTop={2}>
            <Icon as={ MdOutlinePhotoCamera }/>
            <Text marginLeft={2}/>POSTS
        </Box>
        <Flex padding={8} justifyContent="space-between" borderRadius={5} >
            <Image src="https://preview.redd.it/wsoh5uuewxj31.jpg?auto=webp&s=e9ea562304f5f516e99b789edea2921dd9806c27" boxSize="220px"/>
            <Image src="https://preview.redd.it/8uqk7an3wbz21.jpg?auto=webp&s=c91b7cdcb4a509fd7f8da9b843fb975e0bbf8b26" boxSize="220px"/>
            <Image src="https://ahseeit.com/anime/king-include/uploads/2021/02/125198641_1095653730876747_5353216878246094970_n-9712893570.jpg" boxSize="220px"/>
        </Flex>
      </Box>
    </Center>
  );
};

export default ProfilePage;
