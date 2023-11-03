import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import NameWithAvatar from 'components/NameWithAvatar';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { RiArrowDownLine } from 'react-icons/ri';
import { useIsLoading, useStore } from 'store/store.hooks';
import { ActionKey } from 'store/store.types';
import { Todo } from '../todos.types';

interface ReassignTodoToAnotherUserProps {
  todo: Todo;
}

const ReassignTodoToAnotherUser: FC<ReassignTodoToAnotherUserProps> = observer(
  ({ todo }) => {
    const {
      users: { users },
      todos: { updateTodo },
    } = useStore();
    const isLoading = useIsLoading(`${ActionKey.UpdateTodo}-${todo.id}`);

    const onUserSelect = async (assigneeId?: Todo['assigneeId']) => {
      updateTodo({ ...todo, assigneeId });
    };

    const currentAssignee = users.find((user) => user.id === todo.assigneeId);

    return (
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<RiArrowDownLine />}
          w={180}
          textAlign="start"
          alignItems={'center'}
          py={4}
          isLoading={isLoading}
        >
          {currentAssignee ? (
            <NameWithAvatar
              name={currentAssignee.name}
              surname={currentAssignee.surname}
            />
          ) : (
            <Text color="whiteAlpha.500">Choose user</Text>
          )}
        </MenuButton>
        <MenuList>
          <MenuItem key={'Unassigned'} onClick={() => onUserSelect(undefined)}>
            Unassigned
          </MenuItem>
          {users.map((user) => (
            <MenuItem key={user.id} onClick={() => onUserSelect(user.id)}>
              <NameWithAvatar name={user.name} surname={user.surname} />
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }
);

export default ReassignTodoToAnotherUser;
