import React from "react";
import { VStack, Box, Image, Text, Button, Input } from "native-base";
import Icon from "../assets/Login-register-Icon.png";

export default Register = () => {
  return (
    <VStack space={10} alignItems="center">
      <VStack alignItems="center" space={10}>
        <Box alignItems="center">
          <Image source={Icon} alt="Alternate Text" size="2xl" />
        </Box>
        <Text bold fontSize="xl" w="64">
          Register
        </Text>
      </VStack>
      <VStack space={3} alignItems="center">
        <Input size="md" type={"email"} placeholder="Email" width={270} />
        <Input size="md" placeholder="Name" width={270} />
        <Input type={"password"} size="md" placeholder="Password" width={270} />
        <Button size="sm" variant="subtle" colorScheme="secondary" width={270}>
          Register
        </Button>
        <Text fontSize="xs" textAlign="center" w="64">
          Joined Us Before?{" "}
          <Text bold color="red.400">
            Login
          </Text>
        </Text>
      </VStack>
    </VStack>
  );
};
