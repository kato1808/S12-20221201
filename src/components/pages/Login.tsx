import { Box, Button, Divider, Flex, Heading, Input } from "@chakra-ui/react";
import { memo, VFC } from "react";

export const Login: VFC = memo(() => {
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1">ユーザ管理アプリ</Heading>
        <Divider />
        <Input placeholder="ユーザID" />
        <Button>ログイン</Button>
      </Box>
    </Flex>
  );
});
