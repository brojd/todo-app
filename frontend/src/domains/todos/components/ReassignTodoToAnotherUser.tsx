import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FC } from 'react';
import { RiArrowDownLine } from 'react-icons/ri';
import { useStore } from 'store/store.hooks';
import { Todo } from '../todos.types';

interface ReassignTodoToAnotherUserProps {
  todo: Todo;
}

const ReassignTodoToAnotherUser: FC<ReassignTodoToAnotherUserProps> = ({
  todo,
}) => {
  const { users } = useStore();

  const usersToChoose = users;

  // const usersToChoose =
  //   users?.items.filter((user) => user.id !== todo.user?.id) || [];
  // const onUserSelect = (user: User) => {
  //   todo.user = user;
  //   todo.save();
  // };

  return (
    <Box>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<RiArrowDownLine />}
          w={180}
          textAlign="start"
          alignItems={'center'}
          py={4}
          data-qa-id={QaId.ReassignTodoToAnotherUserMenuButton}
        >
          {todo.user ? (
            <NameWithAvatar user={todo.user} />
          ) : (
            <Text color="whiteAlpha.500">Choose user</Text>
          )}
        </MenuButton>
        <MenuList>
          {usersToChoose.map((user) => (
            <MenuItem
              key={user.id}
              onClick={() => onUserSelect(user)}
              data-qa-id={QaId.ReassignTodoToAnotherUserOption}
            >
              <NameWithAvatar user={user} />
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default ReassignTodoToAnotherUser;
