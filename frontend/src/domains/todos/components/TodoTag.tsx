import { Tag, TagProps, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface TodoTagProps extends TagProps {
  id: string;
}

const TodoTag: FC<TodoTagProps> = ({ id, ...tagProps }) => (
  <Tag colorScheme="cyan" variant="subtle" {...tagProps}>
    <Text pt={'1px'}>{id}</Text>
  </Tag>
);

export default TodoTag;
