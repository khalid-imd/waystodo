import React from "react";
import { VStack, Box, Image, Text, Button, Input } from "native-base";
import Icon from "../assets/Login-register-Icon.png";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default Register = ({ navigation }) => {
  const [form, setForm] = React.useState({
    firstName: "",
    email: "",
    password: "",
  });

  const handleOnChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnPress = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify(form);

      const response = await axios.post(
        "https://api.kontenbase.com/query/api/v1/a5d9c191-8415-482a-8df3-bb20787a8b23/auth/register",
        body,
        config
      );
      console.log(response);

      if (response) {
        await AsyncStorage.setItem("token", response.data.token);
      }

      const value = await AsyncStorage;
      if (value !== null) {
        console.log(value);
        navigation.navigate("login");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

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
        <Input
          size="md"
          type={"email"}
          placeholder="Email"
          onChangeText={(value) => handleOnChange("email", value)}
          value={form.email}
          width={270}
        />
        <Input
          size="md"
          placeholder="Name"
          onChangeText={(value) => handleOnChange("firstName", value)}
          value={form.firstName}
          width={270}
        />
        <Input
          type={"password"}
          size="md"
          placeholder="Password"
          onChangeText={(value) => handleOnChange("password", value)}
          value={form.password}
          width={270}
        />
        <Button
          onPress={handleOnPress}
          size="sm"
          variant="subtle"
          colorScheme="secondary"
          width={270}
        >
          Register
        </Button>
        <Text fontSize="xs" textAlign="center" w="64">
          Joined Us Before?{" "}
          <Text
            onPress={() => navigation.navigate("login")}
            bold
            color="red.400"
          >
            Login
          </Text>
        </Text>
      </VStack>
    </VStack>
  );
};
