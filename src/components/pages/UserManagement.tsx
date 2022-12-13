import {
  Center,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Stack,
  useDisclosure,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, useCallback, useEffect, VFC } from "react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, loading } = useAllUsers();

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(() => onOpen(), []);

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                imageurl="https://source.unsplash.com/random"
                userName={user.username}
                fullName={user.name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ユーザ詳細</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <FormControl>
                <FormLabel>名前</FormLabel>
                <Input value="加藤裕幸" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>フルネーム</FormLabel>
                <Input value="加藤裕幸" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>メール</FormLabel>
                <Input value="加藤裕幸" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>電話番号</FormLabel>
                <Input value="加藤裕幸" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});
