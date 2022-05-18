import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { DiCodeigniter, DiReact, DiWebplatform } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
function Profile() {
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    <Flex
      direction={isNotSmallerScreen ? "row" : "colum"}
      w="100%"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box alignSelf="center" px="32" py="16">
        <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
          2+
        </Heading>
        <Text fontSize="2xl" color="gray.400">
          Years of Experiance as IT Support in BPO Sector{" "}
        </Text>
      </Box>
      <Box alignSelf="center" px="32" py="16">
        <Text fontWeight="bold" fontSize="2xl">
          Web Site Designer and Developer, Specialised in FronT-End Development.
        </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            backgroundColor="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "whiteAlpha.500" }}
          >
            <Icon color="white" p="4" as={FaHtml5} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              <b>HTML</b>
            </Text>
          </Flex> 
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            backgroundColor="whiteAlpha.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "whiteAlpha.500" }}
          >
            <Icon color="blue.400" p="4" as={FaCss3} w="24" h="24" />
            <Text color="blue.400" p="4" fontSize="xl" fontWeight="semibold">
              <b>CSS</b>
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            backgroundColor="blue.400"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "whiteAlpha.500" }}
          >
            <Icon color="white" p="4" as={FaReact} w="24" h="24" />
            <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
              <b>React</b>
            </Text>
          </Flex>
          <Flex
            rounded="xl"
            direction="column"
            mt={4}
            ml={isNotSmallerScreen ? 4 : 0}
            backgroundColor="white"
            h="30vh"
            w="30vh"
            justify="flex-end"
            _hover={{ bg: "whiteAlpha.500" }}
          >
            <Icon color="red" p="4" as={FaAngular} w="24" h="24" />
            <Text color="red" p="4" fontSize="xl" fontWeight="semibold">
              <b>Angular</b>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Profile;
