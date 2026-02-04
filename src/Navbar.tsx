import {
  HStack,
  Box,
  Image,
  Text,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "/src/assets/vendingtech-logo.jpg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = [
    { name: "Strona Główna", path: "/" },
    { name: "Produkty", path: "/produkty" },
    { name: "Usługi", path: "/uslugi" },
    { name: "Kontakt", path: "/kontakt" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      boxShadow="sm"
      width="100%"
      bg="white"
    >
      <HStack
        width="100vw"
        mx="auto"
        px={6}
        py={4}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo */}
        <Image src={logo} alt="VendingTech" h="40px" />

        {/* Desktop Links */}
        <HStack
          spacing={8}
          display={{ base: "none", md: "flex" }} // hide on small screens
        >
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} color="black">
              <Text _hover={{ color: "blue.500" }}>{link.name}</Text>
            </Link>
          ))}
        </HStack>

        {/* Hamburger menu for mobile */}
        <IconButton
          color={"black"}
          aria-label="Open menu"
          icon={<RxHamburgerMenu />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
        />
      </HStack>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={6} mt={10} align="start">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} onClick={onClose}>
                  <Text fontSize="lg">{link.name}</Text>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
