import { Flex } from '@chakra-ui/react';
import {
  EmptyState,
  PersonaAvatar,
  StructuredList,
  StructuredListItem,
} from '@saas-ui/react';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { RiCheckboxMultipleLine } from 'react-icons/ri';
import { useStore } from 'store/store.hooks';
import { User } from '../users.types';
import DeleteUser from './DeleteUser';

const UsersList = observer(() => {
  const {
    users: { users },
  } = useStore();

  if (!users.length) {
    return (
      <EmptyState
        textAlign="center"
        colorScheme="primary"
        icon={RiCheckboxMultipleLine}
        title="No users"
        mt={4}
      />
    );
  }

  return (
    <StructuredList>
      {users.map((user) => (
        <UserListItem user={user} />
      ))}
    </StructuredList>
  );
});

interface UserListItemProps {
  user: User;
}
const UserListItem: FC<UserListItemProps> = ({ user }) => (
  <StructuredListItem key={user.id}>
    <Flex alignItems="center" columnGap={2}>
      <Flex alignItems="center" columnGap={2}>
        <PersonaAvatar name={`${user.name} ${user.surname}`} size="sm" />
        <span>
          {user.name} {user.surname}
        </span>
      </Flex>
    </Flex>
    <Flex alignItems="center" columnGap={2}>
      <DeleteUser userId={user.id} />
    </Flex>
  </StructuredListItem>
);

export default UsersList;
