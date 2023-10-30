import { Box } from '@chakra-ui/react';
import {
  AppShell,
  EmptyStateBody,
  EmptyStateContainer,
  EmptyStateIcon,
  EmptyStateTitle,
} from '@saas-ui/react';
import { RiGhost2Line } from 'react-icons/ri';

const NotFound = () => (
  <AppShell>
    <Box as="main" flex="1" py="2" px="4" display="flex">
      <EmptyStateContainer colorScheme="purple">
        <EmptyStateBody textAlign="center">
          <EmptyStateIcon as={RiGhost2Line} />
          <EmptyStateTitle>Whoopsy, page is not found.</EmptyStateTitle>
        </EmptyStateBody>
      </EmptyStateContainer>
    </Box>
  </AppShell>
);

export default NotFound;
