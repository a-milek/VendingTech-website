import { Box, VStack, Text, Link, Stack } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  const intl = useIntl();

  const navLinks = [
    { id: "nav.home", path: "/" },
    { id: "nav.products", path: "/produkty" },
    { id: "nav.services", path: "/uslugi" },
    { id: "nav.contact", path: "/kontakt" },
    { id: "nav.faq", path: "/faq" },
  ];

  return (
    <Box py={10} px={6} mt="10%">
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={10}
        justify="space-between"
        align="start"
        maxW="1200px"
        mx="auto"
      >
        {/* MENU */}
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" mb={2} fontSize="lg">
            MENU
          </Text>
          {navLinks.map((link) => (
            <Link
              as={RouterLink}
              key={link.id}
              to={link.path}
              _hover={{ textDecoration: "none" }}
            >
              <Text _hover={{ color: "blue.500" }}>
                {intl.formatMessage({ id: link.id })}
              </Text>
            </Link>
          ))}
        </VStack>

        {/* CONTACT */}
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" mb={2} fontSize="lg">
            {intl.formatMessage({ id: "contact.title" })}
          </Text>
          <Text>
            <Link href="tel:+48530374503" _hover={{ color: "blue.500" }}>
              +48 530 374 503
            </Link>
          </Text>
          <Text>
            <Link
              href="mailto:vendingtech.sklep@gmail.com"
              _hover={{ color: "blue.500" }}
            >
              vendingtech.sklep@gmail.com
            </Link>
          </Text>
        </VStack>
      </Stack>

      <Text textAlign="center" fontSize="sm" color="gray.400" mt={8}>
        &copy; {new Date().getFullYear()} VendingTech.{" "}
        {intl.formatMessage({ id: "footer.allRightsReserved" })}
      </Text>
    </Box>
  );
};

export default Footer;
