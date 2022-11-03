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
  // const item = route.params.item;
  console.log("oke item", route);
  return (
    <ScrollView padding={5}>
      <Box backgroundColor="#DAEFFF" borderRadius="5" mt={10} mb={10}>
        <VStack space="4" divider={<Divider />}>
          <HStack px="4" pt="4">
            <Text fontSize="30px" w="64">
              {/* {item.category} */}
            </Text>
            <Box>
              <Box backgroundColor="red.300" borderRadius={5} marginRight="5">
                <Text
                  fontSize="15px"
                  bold
                  color="white"
                  w={12}
                  textAlign="center"
                >
                  Study
                </Text>
              </Box>
              <Image
                mt={2}
                source={StatusChecked}
                resizeMode="contain"
                alignItems="center"
              />
            </Box>
          </HStack>
          <Box px="4">
            NativeBase is a free and open source framework that enable
            developers to build high-quality mobile apps using React Native iOS
            and Android apps with a fusion of ES6. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vel, enim a! Et eos similique a rerum
            eligendi delectus odio blanditiis nihil error tempore. Sint iste
            beatae repellendus, autem voluptate similique rerum quis hic ut
            sequi sunt? Ab laborum iure ad neque. Magnam quibusdam blanditiis,
            temporibus, sit officiis facilis possimus non distinctio hic, animi
            nesciunt beatae laboriosam perspiciatis ea explicabo accusamus illum
            cumque dolor porro. Ipsa iure explicabo laudantium! Fugiat odit
            voluptatum sapiente minima molestias, iste nostrum veniam deserunt
            earum provident quae repellendus vero necessitatibus illo a quaerat
            esse ut doloribus at eius dolore assumenda dignissimos ipsam qui?
            Fugiat numquam eius voluptatem fugit, esse libero officia aperiam
            ipsam obcaecati ea quia, harum repudiandae quibusdam perferendis
            ipsa, facere asperiores quos deserunt minima! Nihil aspernatur vitae
            ducimus reprehenderit repudiandae hic, debitis odit quis delectus,
            quos corrupti necessitatibus sapiente, perferendis minus dolores ex.
            Optio, error quas molestiae voluptate beatae rerum rem enim fugit
            odit tempora est eaque reprehenderit corporis eos. Eos, ab minus
            nobis deserunt iusto similique corporis doloremque beatae illum
            debitis praesentium delectus earum voluptatum expedita consequatur
            sint autem quaerat officia, numquam reiciendis voluptate accusantium
            temporibus! Similique ullam accusamus nobis magnam est corrupti
            maiores possimus cupiditate dolorem officiis, commodi iusto ab
            ducimus rem.
          </Box>
          <Box px="4" pb="4">
            GeekyAnts
          </Box>
        </VStack>
      </Box>
    </ScrollView>
  );
};
