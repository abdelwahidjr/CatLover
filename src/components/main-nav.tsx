import * as React from "react";
import { ButtonGroup } from "@chakra-ui/react";
import NavLink from "./nav-link";

type MainNavProps = {};

const MainNav: React.FC<MainNavProps> = (): JSX.Element => {
  return React.useMemo(
    () => (
      <ButtonGroup spacing="6">
        <NavLink to="/cats">Cats</NavLink>
        <NavLink to="/breeds">Breeds</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
      </ButtonGroup>
    ),
    []
  );
};

export default MainNav;
