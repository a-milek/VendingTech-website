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
  Select,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "/src/assets/vendingtech-logo.jpg";
import { ColorModeSwitch } from "./components/ColorModeSwitch";
import { useIntl } from "react-intl";

interface NavbarProps {
  currentLocale: string;
  setLocale: (locale: string) => void;
}

const Navbar = ({ currentLocale, setLocale }: NavbarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue("white", "#1a202c");
  const intl = useIntl();

  const navLinks = [
    { id: "nav.home", path: "/" },
    { id: "nav.products", path: "/produkty" },
    { id: "nav.services", path: "/uslugi" },
    { id: "nav.contact", path: "/kontakt" },
    { id: "nav.faq", path: "/faq" },
  ];

  const handleLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocale(e.target.value);
  };

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      boxShadow="sm"
      width="100vw"
      bg={bgColor}
    >
      <HStack
        mx="auto"
        px={6}
        py={4}
        alignItems="center"
        justifyContent="space-between"
      >
        <Image src={logo} alt="VendingTech" h="40px" />

        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          {navLinks.map((link) => (
            <Link key={link.id} to={link.path}>
              <Text _hover={{ color: "blue.500" }}>
                {intl.formatMessage({ id: link.id })}
              </Text>
            </Link>
          ))}

          <Select
            value={currentLocale}
            onChange={handleLocaleChange}
            size="sm"
            w="fit-content"
            variant="outline"
          >
            <option value="pl">PL</option>
            <option value="en">EN</option>
          </Select>
          <ColorModeSwitch />
        </HStack>

        <IconButton
          aria-label={intl.formatMessage({ id: "nav.openMenu" })}
          icon={<RxHamburgerMenu />}
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
        />
      </HStack>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack spacing={6} mt={10} align="start">
              {navLinks.map((link) => (
                <Link key={link.id} to={link.path} onClick={onClose}>
                  <Text fontSize="lg">
                    {intl.formatMessage({ id: link.id })}
                  </Text>
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
