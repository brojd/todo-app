import { Box } from '@chakra-ui/react';
import { AppShell } from '@saas-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => (
  <AppShell sidebar={<Sidebar />}>
    <Box as="main" flex="1" pt="12" pb="8" px="8" overflowY="auto">
      <Outlet />
    </Box>
  </AppShell>
);

export default Layout;
