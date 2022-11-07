import React, { useState } from "react";
import {
  ScrollView,
  Text,
  HStack,
  Box,
  Image,
  Input,
  Icon,
  Select,
  CheckIcon,
  VStack,
  View,
  Button,
} from "native-base";
import Profile from "../assets/liststodo-profile.png";
// import StatusPending from "../assets/liststodo-icon-pending.png";
// import StatusChecked from "../assets/liststodo-icon-checked.png";
import Tanggal from "../components/datePick.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export default ListTodo = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState();
  const [data, setData] = React.useState([]);
  const [dataCategory, setDataCategory] = React.useState([]);
  const [dataUser, setDataUser] = React.useState([]);

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
      const res = await axios.get(
        "https://api.v2.kontenbase.com/query/api/v1/a5d9c191-8415-482a-8df3-bb20787a8b23/addlist",
        config
      );
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getData();
  }, [data]);

  const getDataCategory = async () => {
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
      const res = await axios.get(
        "https://api.kontenbase.com/query/api/v1/a5d9c191-8415-482a-8df3-bb20787a8b23/categories",
        config
      );
      setDataCategory(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getDataCategory();
  }, [dataCategory]);

  const getDataUser = async () => {
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
      const res = await axios.get(
        "https://api.v2.kontenbase.com/query/api/v1/a5d9c191-8415-482a-8df3-bb20787a8b23/Users",
        config
      );
      setDataUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getDataUser();
  }, [dataUser]);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    navigation.navigate("login");
  };

  return (
    <ScrollView w="full" mt="10" padding="5">
      <HStack>
        <Box w="75%">
          {/* {dataUser.map((item) => {
            return ( */}
          <Text bold fontSize="xl" w="64">
            Hi {dataUser.firstName}
          </Text>
          {/* );
          })} */}
          <Text color="red.400">{data.length} List</Text>
        </Box>
        <Box w="25%" alignItems="center">
          <Image source={Profile} resizeMode="contain" alt="profile" />
          <Button mt="5px" variant="subtle" onPress={handleLogout}>
            logout
          </Button>
        </Box>
      </HStack>

      <Input
        placeholder="Search"
        variant="filled"
        width="100%"
        mt={8}
        mb={2}
        py="1"
        px="1"
        InputLeftElement={
          <Icon ml="2" size="4" color="gray.400" name="ios-search" />
        }
      />

      <HStack space={2}>
        <Button
          variant="outline"
          onPress={() => setShowModal(true)}
          iconName="document-text"
          mt="2"
          p={0}
        >
          <Text color="gray.400">
            {date ? date.toDateString() : "Select date..."}
          </Text>
        </Button>
        <Tanggal
          showModal={showModal}
          setShowModal={setShowModal}
          date={date}
          setDate={setDate}
        />
        <Select
          minWidth="100"
          size="xs"
          accessibilityLabel="Choose Service"
          placeholder="Category"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          {dataCategory.map((item) => {
            return <Select.Item label={item.name} value={item.name} />;
          })}
        </Select>

        <Select
          minWidth="100"
          size="xs"
          accessibilityLabel="Choose Service"
          placeholder="Status"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size={5} />,
          }}
          mt="1"
        >
          <Select.Item label="on going" value="on going" />
          <Select.Item label="finished" value="finished" />
        </Select>
      </HStack>

      <Box mt={12}>
        <VStack>
          {data.map((item) => {
            return (
              <HStack
                mb={6}
                backgroundColor="blue.100"
                borderRadius={5}
                padding="3"
                space={2}
                h="24"
              >
                <Box w="75%">
                  <Text
                    bold
                    fontSize="xs"
                    onPress={() => navigation.navigate("detail list", { item })}
                  >
                    {item.category} - {item.name}
                  </Text>
                  <View h="20px">
                    <Text fontSize="2xs">{item.description}</Text>
                  </View>
                  <Text fontSize="2xs" mt={3}>
                    {item.date}
                  </Text>
                </Box>
                <Box w="23%">
                  <View
                    backgroundColor="red.300"
                    borderRadius={5}
                    padding={"0.5"}
                    alignItems="center"
                  >
                    <Text fontSize="10px" color="black">
                      {item.category}
                    </Text>
                  </View>

                  <Image
                    mt={2}
                    source={item.status}
                    resizeMode="contain"
                    alignItems="center"
                    backgroundColor="blue.400"
                  />
                </Box>
              </HStack>
            );
          })}
        </VStack>
      </Box>
    </ScrollView>
  );
};
