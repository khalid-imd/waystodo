import React from "react";
import {
  ScrollView,
  Box,
  VStack,
  Divider,
  Text,
  HStack,
  Image,
} from "native-base";
import StatusChecked from "../assets/liststodo-icon-checked.png";

export default DetailList = ({ route }) => {
  const item = route.params.item;
  //console.log("oke item", route);
  return (
    <ScrollView padding={3}>
      <Box backgroundColor="#DAEFFF" borderRadius="8" mb={10} padding="15px">
        <VStack space="4">
          <HStack>
            <Box w="75%">
              <Text fontSize="30px">
                {item.category} - {item.name}
              </Text>
            </Box>
            <Box w="25%">
              <VStack>
                <Box
                  alignItems="center"
                  backgroundColor="red.300"
                  borderRadius={5}
                >
                  <Text fontSize="15px" bold color="white" w={12}>
                    {item.category}
                  </Text>
                </Box>
                <Box alignItems="center">
                  <Image
                    mt={2}
                    source={StatusChecked}
                    resizeMode="contain"
                    alignItems="center"
                    alt="status "
                  />
                </Box>
              </VStack>
            </Box>
          </HStack>
          <Box mt="15px">{item.description}</Box>
          <Box>GeekyAnts</Box>
        </VStack>
      </Box>
    </ScrollView>
  );
};
