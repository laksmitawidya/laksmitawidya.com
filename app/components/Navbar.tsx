"use client";

import {
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import { ThemeSwitcher } from "./ThemeSwitcher";

export const NavbarSection = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar isBlurred>
      <NavbarBrand>laksmitawidya</NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" onClick={() => scrollToSection("about")}>
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => scrollToSection("experience")}
            aria-current="page"
          >
            Experiences
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link onClick={() => scrollToSection("project")}>Projects</Link>
        </NavbarItem>
        <NavbarItem>
          <Link onClick={() => scrollToSection("contact")}>Contacts</Link>
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
