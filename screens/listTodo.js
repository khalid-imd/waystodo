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
  Pressable,
  Button,
} from "native-base";
import Profile from "../assets/liststodo-profile.png";
// import StatusPending from "../assets/liststodo-icon-pending.png";
// import StatusChecked from "../assets/liststodo-icon-checked.png";
import Tanggal from "../components/datePick.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// const List = [
//   {
//     category: "Study",
//     name: "golang",
//     date: "3 desember 2022",
//     status: StatusPending,
//   },
//   {
//     category: "Home work",
//     name: "mathematic",
//     date: "4 desember 2022",
//     status: StatusChecked,
//   },
//   {
//     category: "Study",
//     name: "HTML",
//     date: "3 desember 2022",
//     status: StatusChecked,
//   },
//   {
//     category: "Study",
//     name: "Javascript",
//     date: "9 desember 2022",
//     status: StatusPending,
//   },
//   {
//     category: "home work",
//     name: "Javascript",
//     date: "9 desember 2022",
//     status: StatusPending,
//   },
// ];

export default ListTodo = () => {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState();
  const [data, setData] = React.useState([]);

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
        "https://api.v2.kontenbase.com/query/api/v1/a5d9c191-8415-482a-8df3-bb20787a8b23/addlist",
        config
      );
      setData(res.data);
      //console.log(res.data);
      //setDataLoading(false);
    } catch (error) {
      console.log(error);
      //setDataLoading(false);
    }
  };

  //console.log("ini dataaaaaaa", data);
  React.useEffect(() => {
    getData();
  }, [data]);

  return (
    <ScrollView w="full" mt="10" padding="5">
      <HStack>
        <Box>
          <Text bold fontSize="xl" w="64">
            Hi Khalid
          </Text>
          <Text color="red.400">3000 List</Text>
        </Box>
        <Image source={Profile} resizeMode="contain" />
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
          <Select.Item label="UX Research" value="ux" />
          <Select.Item label="Web Development" value="web" />
          <Select.Item label="Cross Platform Development" value="cross" />
          <Select.Item label="UI Designing" value="ui" />
          <Select.Item label="Backend Development" value="backend" />
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
          <Select.Item label="Holding" value="holding" />
          <Select.Item label="Started" value="started" />
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
                  <Text bold fontSize="xs">
                    {item.category} - {item.name}
                  </Text>
                  <Text fontSize="2xs">{item.description}</Text>
                  <Text fontSize="2xs" mt={3}>
                    12 nov
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
