import React, { useState } from "react";
import {
  VStack,
  Text,
  Input,
  Button,
  FormControl,
  Select,
  CheckIcon,
  WarningOutlineIcon,
  TextArea,
  ScrollView,
  FlatList,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Tanggal from "../components/datePick.js";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default AddList = () => {
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

  return (
    <ScrollView>
      <VStack alignItems="center" mt="20">
        <Text bold fontSize="xl" w="64">
          Add List
        </Text>
        <VStack space={2} alignItems="center" mt={5}>
          <Input size="md" placeholder="Name" width={270} />
          <FormControl w="3/4" width={270} isRequired isInvalid>
            <Select
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Category"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size={5} />,
              }}
              mt="1"
            >
              {/* <FlatList
                data={data}
                key={(item) => item.index}
                renderItem={({ item }) => ( */}

              {data.map((item) => {
                return <Select.Item label={item.name} value={item.name} />;
              })}

              {/* )}
              /> */}
            </Select>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Please Select the Category!
            </FormControl.ErrorMessage>
          </FormControl>
          <Button variant="outline" w="270" onPress={() => setShowModal(true)}>
            <Text color="gray.400" iconName="document-text">
              {date ? date.toDateString() : "Select date..."}
            </Text>
          </Button>
          <Tanggal
            showModal={showModal}
            setShowModal={setShowModal}
            date={date}
            setDate={setDate}
          />
          <TextArea placeholder="Description" w="75%" />
        </VStack>
        <Button
          size="sm"
          variant="subtle"
          colorScheme="secondary"
          width={270}
          mt="10"
        >
          Add List
        </Button>
      </VStack>
    </ScrollView>
  );
};
