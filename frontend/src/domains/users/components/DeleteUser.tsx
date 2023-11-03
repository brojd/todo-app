import { Button } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useIsLoading, useStore } from 'store/store.hooks';
import { ActionKey } from 'store/store.types';
import { User } from '../users.types';

interface DeleteUserProps {
  userId: User['id'];
}

const DeleteUser: FC<DeleteUserProps> = observer(({ userId }) => {
  const {
    users: { deleteUser },
  } = useStore();
  const isLoading = useIsLoading(`${ActionKey.DeleteUser}-${userId}`);

  return (
    <Button
      variant="solid"
      colorScheme="red"
      onClick={() => deleteUser(userId)}
      isLoading={isLoading}
    >
      Delete User
    </Button>
  );
});

export default DeleteUser;
