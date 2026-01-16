import { HStack, Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "/src/assets/vendingtech-logo.jpg";

const Navbar = () => {
  return (
    <Box
      bg="white"
      position="sticky"
      top="0"
      zIndex="1000"
      boxShadow="sm"
      width="100%"
      marginBottom={"1%"}
    >
      <HStack
        width={"100vw"}
        mx="auto"
        px={6}
        py={4}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Logo left */}
        <Image src={logo} alt="VendingTech" h="40px" />

        {/* Navigation links right */}
        <HStack spacing={8}>
          <Link to="/">
            <Text _hover={{ color: "blue.500" }}>Strona Główna</Text>
          </Link>
          <Link to="/produkty">
            <Text _hover={{ color: "blue.500" }}>Produkty</Text>
          </Link>
          <Link to="/uslugi">
            <Text _hover={{ color: "blue.500" }}>Usługi</Text>
          </Link>
          <Link to="/kontakt">
            <Text _hover={{ color: "blue.500" }}>Kontakt</Text>
          </Link>
          <Link to="/faq">
            <Text _hover={{ color: "blue.500" }}>FAQ</Text>
          </Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
