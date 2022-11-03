import React from "react";
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
  Button,
  VStack,
} from "native-base";
import Profile from "../assets/liststodo-profile.png";
import StatusPending from "../assets/liststodo-icon-pending.png";
import StatusChecked from "../assets/liststodo-icon-checked.png";

const List = [
  {
    category: "Study",
    name: "golang",
    date: "3 desember 2022",
    status: StatusPending,
  },
  {
    category: "Home work",
    name: "mathematic",
    date: "4 desember 2022",
    status: StatusChecked,
  },
  {
    category: "Study",
    name: "HTML",
    date: "3 desember 2022",
    status: StatusChecked,
  },
  {
    category: "Study",
    name: "Javascript",
    date: "9 desember 2022",
    status: StatusPending,
  },
  {
    category: "home work",
    name: "Javascript",
    date: "9 desember 2022",
    status: StatusPending,
  },
];

export default ListTodo = () => {
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
        py="1"
        px="1"
        InputLeftElement={
          <Icon ml="2" size="4" color="gray.400" name="ios-search" />
        }
      />

      <HStack space={2}>
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
          {List.map((item) => {
            return (
              <HStack
                mb={6}
                backgroundColor="blue.100"
                borderRadius={5}
                padding="3"
              >
                <Box>
                  <Text bold fontSize="xs" w="64">
                    {item.category} - {item.name}
                  </Text>
                  <Text fontSize="2xs" w="64">
                    Learn Golang to improve fundamentals and familiarize with
                    coding.
                  </Text>
                  <Text fontSize="2xs" w="64" mt={3}>
                    {item.date}
                  </Text>
                </Box>
                <Box>
                  <Box
                    backgroundColor="red.300"
                    borderRadius={5}
                    marginRight="5"
                  >
                    <Text
                      fontSize="10px"
                      color="black"
                      w={12}
                      textAlign="center"
                    >
                      {item.category}
                    </Text>
                  </Box>
                  <Image
                    mt={2}
                    source={item.status}
                    resizeMode="contain"
                    alignItems="center"
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
