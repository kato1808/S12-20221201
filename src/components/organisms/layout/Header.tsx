import { Box,  Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const {isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback( () => history.push("/home"), []);
  const onClickUserManagement = useCallback( () => history.push("/home/user_Management"), []);
  const onClickSetting = useCallback( () => history.push("/home/setting"), []);

  return (
    <>
    <Flex
      as="nav"
      bg="teal.500"
      color="gray.50"
      align="center"
      justify="space-between"
      padding={{ base: 3, md: 5 }}
    >
      <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
        <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
          ユーザ管理アプリ
        </Heading>
      </Flex>
      <Flex
        align="center"
        fontSize="sm"
        flexGrow={2}
        display={{ base: "none", md: "flex" }}
      >
        <Box pr={4}>
          <Link>ユーザ一覧</Link>
        </Box>
        <Link>設定</Link>
      </Flex>
      <MenuIconButton onOpen={onOpen} />
    </Flex>
    <MenuDrawer onClose={onClose} isOpen={isOpen} />
    < />
  );
});
