import React from "react";
import {
  Text,
  Input,
  Button,
  VStack,
  Box,
  FlatList,
  View,
  ScrollView,
} from "native-base";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default AddCategories = () => {
  //const Category = ["Study", "Homework", "Workout", "eat", "ml", "sleep"];
  const [data, setData] = React.useState([]);

  const [form, setForm] = React.useState({
    name: "",
  });

  const handleOnChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnPress = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token === null) {
        navigation.navigate("login");
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const body = JSON.stringify(form);

      const response = await axios.post(
        "https://api.kontenbase.com/query/api/v1/a5d9c191-8415-482a-8df3-bb20787a8b23/categories",
        body,
        config
      );
      console.log(response);

      alert("Category Added Successfully");
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token === null) {
        navigation.navigate("Login");
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      //setDataLoading(true);

      const res = await axios.get(
        "https://api.kontenbase.com/query/api/v1/a5d9c191-8415-482a-8df3-bb20787a8b23/categories",
        config
      );
      setData(res.data);
      //setDataLoading(false);
    } catch (error) {
      console.log(error);
      //setDataLoading(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, [data]);

  //console.log("dataaaaaaaaaaaaa", data);

  return (
    <ScrollView mt="20" padding={5}>
      <Box>
        <Text bold fontSize="xl">
          Add Category
        </Text>
        <VStack space={6} alignItems="center" mt={5}>
          <Input
            w="full"
            size="md"
            placeholder="Name"
            onChangeText={(value) => handleOnChange("name", value)}
            value={form.name}
          />
          <Button
            colorScheme="secondary"
            w="full"
            size="sm"
            variant="subtle"
            onPress={handleOnPress}
          >
            Add Category
          </Button>
        </VStack>
      </Box>
      <Box mb="10px">
        <Text mt={16} bold fontSize="xl" w="full">
          List Category
        </Text>
      </Box>
      <Box>
        {data.map((item) => {
          return (
            <Box
              backgroundColor="blue.400"
              mb={3}
              padding={1}
              borderRadius={5}
              alignItems="center"
            >
              <View>
                <Text bold color="white">
                  {item.name}
                </Text>
              </View>
            </Box>
          );
        })}
      </Box>
    </ScrollView>
  );
};
