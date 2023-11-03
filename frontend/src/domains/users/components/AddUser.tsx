import {
  Divider,
  FocusLock,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';
import { Field, Form, FormLayout, SubmitButton } from '@saas-ui/react';
import { observer } from 'mobx-react-lite';
import { useRef } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { useIsLoading, useStore } from 'store/store.hooks';
import { ActionKey } from 'store/store.types';
import { User } from '../users.types';

const AddUser = observer(() => {
  const {
    users: { addUser },
  } = useStore();
  const isLoading = useIsLoading(ActionKey.AddUser);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef(null);

  const onSubmit = async (user: User) => {
    await addUser(user);
    onClose();
  };

  return (
    <Popover
      isOpen={isOpen}
      initialFocusRef={firstFieldRef}
      onOpen={onOpen}
      onClose={onClose}
      closeOnEsc
      closeOnBlur
    >
      <PopoverTrigger>
        <IconButton
          aria-label="Add user"
          size="xxl"
          fontSize="30"
          variant="outline"
          icon={<RiAddFill />}
          mt={4}
        />
      </PopoverTrigger>
      <PopoverContent p={5}>
        <FocusLock persistentFocus={false}>
          <PopoverArrow />
          <Divider my={4} />
          <Form onSubmit={onSubmit}>
            <FormLayout>
              <Field
                name="name"
                label="Name *"
                type="text"
                help="Choose a name for this user"
                rules={{ required: 'Name is required' }}
              />
              <Field
                name="surname"
                label="Surname *"
                type="text"
                help="Choose a surname for this user"
                rules={{ required: 'Surname is required' }}
              />
              <SubmitButton isLoading={isLoading}>Create User</SubmitButton>
            </FormLayout>
          </Form>
        </FocusLock>
      </PopoverContent>
    </Popover>
  );
});

export default AddUser;
