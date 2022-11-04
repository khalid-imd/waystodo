import React from "react";
import { Box, Button, Image, Text, VStack, ScrollView } from "native-base";
import Foto from "../assets/index-image.png";
import Logo from "../assets/index-waystodo.png";

export default Index = ({ navigation }) => {
  return (
    <ScrollView>
      <VStack space={40} alignItems="center">
        <VStack alignItems="center" space={10} mt="24">
          <Box alignItems="center">
            <Image source={Foto} alt="Alternate Text" size="2xl" />
            <Image source={Logo} alt="Ways ToDo" />
          </Box>
          <Text fontSize="xs" textAlign="center" w="64">
            Write your activity and finish your activity. Fast, Simple and Easy
            to Use
          </Text>
        </VStack>
        <VStack space={3} alignItems="center">
          <Button
            onPress={() => navigation.navigate("login")}
            size="sm"
            variant="subtle"
            colorScheme="secondary"
            width={270}
          >
            Login
          </Button>
          <Button
            onPress={() => navigation.navigate("register")}
            size="sm"
            variant="subtle"
            width={270}
          >
            Register
          </Button>
        </VStack>
      </VStack>
    </ScrollView>
  );
};
