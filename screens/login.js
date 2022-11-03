import React from "react";
import { VStack, Box, Image, Text, Button, Input } from "native-base";
import Icon from "../assets/Login-register-Icon.png";

export default Login = ({ navigation }) => {
  return (
    <VStack space={10} alignItems="center" mt="24">
      <VStack alignItems="center" space={10}>
        <Box alignItems="center">
          <Image source={Icon} alt="Alternate Text" size="2xl" />
        </Box>
        <Text bold fontSize="xl" w="64">
          Login
        </Text>
      </VStack>
      <VStack space={3} alignItems="center">
        <Input size="md" placeholder="Email" width={270} />
        <Input type={"password"} size="md" placeholder="Password" width={270} />
        <Button
          onPress={() => navigation.navigate("my app")}
          size="sm"
          variant="subtle"
          colorScheme="secondary"
          width={270}
        >
          Login
        </Button>
        <Text fontSize="xs" textAlign="center" w="64">
          New Users ?{" "}
          <Text
            bold
            color="red.400"
            onPress={() => navigation.navigate("register")}
          >
            Register
          </Text>
        </Text>
      </VStack>
    </VStack>
  );
};
