import { Box, Circle, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { useMediaQuery } from "@chakra-ui/media-query";
import { useColorMode } from "@chakra-ui/color-mode";
function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const { isNotSmallerScreen } = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Pavan Chitte
          </Text>
          <Text color={isDark ? "gray.200" : "gray.500"}>
            Frond End Developer, Full Stack Developer, Learner, YouTuber,
            Building Intaractive Web Pages
          </Text>
          <Button
            mt={8}
            colorScheme="blue"
            onClick={() =>
              window.open("https://app.luminpdf.com/viewer/6283b220a763d10965437000")
            }
          >
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={isNotSmallerScreen ? "0" : "12"}
          mb={isNotSmallerScreen ? "0" : "12"}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://avatars.githubusercontent.com/u/94785206?v=4"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
