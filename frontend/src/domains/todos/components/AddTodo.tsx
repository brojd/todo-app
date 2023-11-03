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
import { Todo } from '../todos.types';

const AddTodo = observer(() => {
  const {
    users: { users },
    todos: { addTodo },
  } = useStore();
  const isLoading = useIsLoading(ActionKey.AddTodo);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef(null);

  const onSubmit = async (todo: Todo) => {
    if (todo.assigneeId === '') {
      delete todo.assigneeId;
    }
    await addTodo(todo);
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
          aria-label="Add todo"
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
                name="title"
                label="Title *"
                type="text"
                help="Choose a title for this todo"
                rules={{ required: 'Title is required' }}
              />
              <Field
                name="description"
                label="Description"
                type="text"
                help="Provide some description"
              />
              <Field
                name="assigneeId"
                label="Assignee"
                type="select"
                help="Assign todo to the user"
                options={[
                  { label: 'Unassigned', value: '' },
                  ...users.map((user) => ({
                    label: `${user.name} ${user.surname}`,
                    value: user.id,
                  })),
                ]}
              />
              <SubmitButton isLoading={isLoading}>Create Todo</SubmitButton>
            </FormLayout>
          </Form>
        </FocusLock>
      </PopoverContent>
    </Popover>
  );
});

export default AddTodo;
