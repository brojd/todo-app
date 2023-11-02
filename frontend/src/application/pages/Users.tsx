import Loading from 'components/Loading';
import UsersList from 'domains/users/components/UsersList';

const Users = () => (
  <Loading actionKey="getAllUsers">
    <UsersList />
  </Loading>
);

export default Users;
