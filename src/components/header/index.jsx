import { Box, Container } from "./styled";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export function Header() {
  function teste() {
    const scrollY = window.scrollY;
    const deviceHeight = window.innerHeight;
    window.scrollTo({
      top: scrollY + deviceHeight,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HiOutlineMenuAlt3 />}
          fontSize="50px"
          variant="outline"
          border="none"
          w="50px"
          h="50px"
          color="#4A00E0"
          background="transparent"
          alignSelf="left"
          display={{ md: "none" }}
        />
        <MenuList>
          <MenuItem border="none" background="transparent">
            home
          </MenuItem>
          <MenuItem border="none" background="transparent">
            sobre mim
          </MenuItem>
          <MenuItem border="none" background="transparent">
            projetos
          </MenuItem>
          <MenuItem border="none" background="transparent">
            contato
          </MenuItem>
        </MenuList>
      </Menu>

      <Box>
        <button>home</button>
        <button>sobre mim</button>
        <button>projetos</button>
        <button>contato</button>
      </Box>
    </Container>
  );
}
