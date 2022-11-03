import React from "react";
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
} from "native-base";
import BottomTabs from "../components/bottomTabs";

export default AddList = () => {
  return (
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
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Please Select the Category!
          </FormControl.ErrorMessage>
        </FormControl>
        <TextArea placeholder="Description" w={270} h={200} />
      </VStack>
      <Button
        size="sm"
        variant="subtle"
        colorScheme="secondary"
        width={270}
        mt="24"
      >
        Add List
      </Button>
    </VStack>
  );
};
