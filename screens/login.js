import React from "react";
import {
  VStack,
  Box,
  Image,
  Text,
  Button,
  Input,
  ScrollView,
} from "native-base";
import Icon from "../assets/Login-register-Icon.png";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default Login = ({ navigation }) => {
  const [form, setForm] = React.useState({
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
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(form);
      const response = await axios.post(
        "https://api.v2.kontenbase.com/query/api/v1/a5d9c191-8415-482a-8df3-bb20787a8b23/auth/login",
        body,
        config
      );
      //console.log(response);

      if (response) {
        await AsyncStorage.setItem("token", response.data.token);
      }

      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        //console.log(value);
        navigation.navigate("my app");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <ScrollView>
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
          <Input
            size="md"
            width={270}
            placeholder="Email"
            onChangeText={(value) => handleOnChange("email", value)}
            value={form.email}
          />
          <Input
            type={"password"}
            size="md"
            width={270}
            placeholder="Password"
            onChangeText={(value) => handleOnChange("password", value)}
            value={form.password}
          />
          <Button
            onPress={handleOnPress}
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
    </ScrollView>
  );
};
