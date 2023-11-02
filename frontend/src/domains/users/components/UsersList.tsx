import { EmptyState, StructuredList, StructuredListItem } from '@saas-ui/react';
import { observer } from 'mobx-react-lite';
import { RiCheckboxMultipleLine } from 'react-icons/ri';
import { useStore } from 'store/store.hooks';

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
        <StructuredListItem key={user.id}>
          {user.name} {user.surname}
        </StructuredListItem>
      ))}
    </StructuredList>
  );
});

export default UsersList;
