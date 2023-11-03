import { Avatar, Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

interface NameWithAvatarProps {
  name?: string;
  surname?: string;
  maxW?: number;
}

const NameWithAvatar: FC<NameWithAvatarProps> = ({
  name,
  surname,
  maxW = 120,
}) => (
  <Flex alignItems="center">
    <Avatar size="xs" name={`${name} ${surname}`} mr={2} />
    <Box
      maxW={maxW}
      textOverflow="ellipsis"
      overflow="hidden"
      whiteSpace="nowrap"
    >
      {name} {surname}
    </Box>
  </Flex>
);

export default NameWithAvatar;
