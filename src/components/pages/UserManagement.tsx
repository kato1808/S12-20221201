import { Box, Image, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap>
      <WrapItem>
        <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
          p={4}
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        >
          <Stack textAlign="center">
            <Image
              borderRadius="full"
              boxSize="160px"
              src="https://source.unsplash.com/random"
              alt="プロフィール写真"
              m="auto"
            />
            <Text fontSize="lg" fontWeight="bold">
              加藤
            </Text>
            <Text fontSize="sm" color="gray">
              HIROYUKI KATO
            </Text>
          </Stack>
        </Box>
      </WrapItem>
    </Wrap>
  );
});
