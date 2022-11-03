import React from "react";
import {
  ScrollView,
  Text,
  Input,
  Button,
  VStack,
  Box,
  HStack,
  Center,
} from "native-base";

const Category = ["Study", "Homework", "Workout"];

export default AddCategories = () => {
  return (
    <ScrollView w={["full"]} padding={10} mt="30">
      <Box>
        <Text bold fontSize="xl" w="64">
          Add Category
        </Text>
        <VStack space={6} alignItems="center" mt={5}>
          <Input size="md" placeholder="Name" width={270} />
          <Button size="sm" variant="subtle" width={270}>
            Add Category
          </Button>
        </VStack>
      </Box>
      <Box mt={16}>
        <Text bold fontSize="xl" w="64">
          List Category
        </Text>
        <HStack space={6} mt="6">
          {Category.map((item) => {
            return (
              <Button size="sm" variant="subtle">
                {item}
              </Button>
            );
          })}
        </HStack>
      </Box>
    </ScrollView>
  );
};
