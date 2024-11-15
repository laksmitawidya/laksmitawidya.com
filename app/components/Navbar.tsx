"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { ThemeSwitcher } from "./ThemeSwitcher";

export const NavbarSection = () => {
  return (
    <Navbar isBlurred>
      <NavbarBrand>
        <p className="font-bold text-inherit"></p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#experience" aria-current="page">
            Experiences
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#project">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            View Full Résumé
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
