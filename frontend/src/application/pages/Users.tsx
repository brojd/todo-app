import { Flex } from '@chakra-ui/react';
import Loading from 'components/Loading';
import AddUser from 'domains/users/components/AddUser';
import UsersList from 'domains/users/components/UsersList';

const Users = () => (
  <Loading actionKey="getAllUsers">
    <UsersList />
    <Flex justifyContent="center">
      <AddUser />
    </Flex>
  </Loading>
);

export default Users;
