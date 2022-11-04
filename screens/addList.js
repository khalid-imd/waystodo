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
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Tanggal from "../components/datePick.js";

export default AddList = () => {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState();

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
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
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
