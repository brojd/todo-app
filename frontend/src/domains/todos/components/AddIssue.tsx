import {
  Divider,
  Flex,
  FocusLock,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from '@chakra-ui/react';
import { AutoForm } from '@saas-ui/react';
import Team from 'domain/teams/team.model';
import User from 'domain/users/user.model';
import { useNextIssueId } from 'hooks/useNextIssueId';
import { useStore } from 'hooks/useStore';
import { observer } from 'mobx-react-lite';
import React, { FC } from 'react';
import { RiAddFill } from 'react-icons/ri';
import Issue from '../issue.model';
import IssueTag from './IssueTag';

interface AddIssueProps {
  team: Team;
}

const getSchema = (userItems: User[]) => ({
  title: {
    label: 'Title *',
    rules: {
      required: 'Title is required',
    },
  },
  description: {
    label: 'Description *',
    rules: {
      required: 'Description is required',
    },
  },
  assignee: {
    type: 'select',
    label: 'Assignee',
    options: userItems.map((user) => ({
      label: `${user.name} ${user.surname}`,
      value: user.id,
    })),
  },
});

const AddIssue: FC<AddIssueProps> = observer(({ team }) => {
  const {
    users: { items: userItems, itemsById: userItemsById },
  } = useStore();
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = React.useRef(null);
  const nextId = useNextIssueId('LNR');

  const onSubmit = ({
    title,
    description,
    assignee,
  }: Pick<Issue, 'title' | 'description'> & { assignee: string }) => {
    const issue = new Issue();
    issue.assignAndSave({
      title,
      description,
      user: userItemsById[assignee],
      id: nextId,
      team,
    });
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
          aria-label="Add issue"
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
          <Flex justifyContent="center">
            <IssueTag id={nextId} />
          </Flex>
          <Divider my={4} />
          <AutoForm
            schema={getSchema(userItems)}
            onSubmit={onSubmit}
            submitLabel="Add"
            textAlign="center"
          />
        </FocusLock>
      </PopoverContent>
    </Popover>
  );
});

export default AddIssue;
