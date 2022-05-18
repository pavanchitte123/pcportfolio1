import { HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";
function Social() {
  return (
    <HStack spacing="24">
      <Icon as={FaFacebook} boxSize="50" />
      <Icon as={FaGoogle} boxSize="50" />
      <Icon as={FaGithub} boxSize="50" />
      <Icon as={FaLinkedin} boxSize="50" />
    </HStack>
  );
}

export default Social;
