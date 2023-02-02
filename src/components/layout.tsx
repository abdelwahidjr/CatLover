import * as React from "react";
import { Outlet } from "react-router-dom";
import { Container, Flex, Heading } from "@chakra-ui/react";
import MainNav from "./main-nav";

type LayoutProps = React.PropsWithChildren<{}>;

const Layout: React.FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <Container
      py={10}
      minW={{
        lg: "container.lg",
      }}
    >
      <Flex justifyContent="space-between" alignItems="flex-end" mb={5}>
        <Heading size="xl">Cat App</Heading>
        <MainNav />
      </Flex>
      <Outlet />
      {children && children}
    </Container>
  );
};

export default Layout;
