import { Divider } from '@chakra-ui/react';
import {
  NavGroup,
  NavItem,
  Sidebar as SaasSidebar,
  SidebarSection,
} from '@saas-ui/react';
import { ReactNode } from 'react';
import { RiGroupLine, RiTodoLine } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const LinkNavItem = ({
  path,
  icon,
  title,
}: {
  path: string;
  icon?: ReactNode;
  title: ReactNode;
}) => {
  const { pathname } = useLocation();
  return (
    <Link to={path}>
      <NavItem icon={icon} isActive={pathname === path} as="div">
        {title}
      </NavItem>
    </Link>
  );
};

const Sidebar = () => (
  <SaasSidebar overflowY="auto">
    <SidebarSection
      pos="relative"
      display="flex"
      flexDir="row"
      justifyContent="space-between"
    >
      ToDo App
    </SidebarSection>
    <Divider />
    <SidebarSection>
      <NavGroup title="Menu" defaultIsOpen>
        <LinkNavItem icon={<RiTodoLine />} path="/" title="Todos" />
        <LinkNavItem icon={<RiGroupLine />} path="/users" title="Users" />
      </NavGroup>
    </SidebarSection>
  </SaasSidebar>
);

export default Sidebar;
