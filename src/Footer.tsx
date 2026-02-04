import { Box, VStack, Text, Link, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box py={10} px={6} marginTop={"10%"}>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={10}
        justify="space-between"
        maxW="1200px"
        mx="auto"
      >
        {/* MENU */}
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" mb={2} fontSize="lg">
            MENU
          </Text>
          <Link href="/" _hover={{ textDecoration: "underline" }}>
            Strona główna
          </Link>
          <Link href="/sklep" _hover={{ textDecoration: "underline" }}>
            Sklep
          </Link>
          <Link href="/uslugi" _hover={{ textDecoration: "underline" }}>
            Usługi
          </Link>
          <Link href="/kontakt" _hover={{ textDecoration: "underline" }}>
            Kontakt
          </Link>
          <Link href="/faq" _hover={{ textDecoration: "underline" }}>
            FAQ
          </Link>
        </VStack>

        {/* LEGAL */}
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" mb={2} fontSize="lg">
            INFORMACJE PRAWNE
          </Text>
          <Link href="/regulamin" _hover={{ textDecoration: "underline" }}>
            Regulamin strony
          </Link>
          <Link
            href="/polityka-prywatnosci"
            _hover={{ textDecoration: "underline" }}
          >
            Polityka prywatności
          </Link>
          <Link href="/faq" _hover={{ textDecoration: "underline" }}>
            FAQ
          </Link>
        </VStack>

        {/* CONTACT */}
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold" mb={2} fontSize="lg">
            SKONTAKTUJ SIĘ Z NAMI
          </Text>
          <Text>
            TELEFON:{" "}
            <Link
              href="tel:+48530374503"
              _hover={{ textDecoration: "underline" }}
            >
              +48 530 374 503
            </Link>
          </Text>
          <Text>
            ADRES E-MAIL:{" "}
            <Link
              href="mailto:vendingtech.sklep@gmail.com"
              _hover={{ textDecoration: "underline" }}
            >
              vendingtech.sklep@gmail.com
            </Link>
          </Text>
          {/* <Button
            as={Link}
            href="/formularz-kontaktowy"
            colorScheme="teal"
            variant="outline"
            size="sm"
            mt={2}
          >
            Formularz kontaktowy: Kliknij tutaj
          </Button> */}
        </VStack>
      </Stack>

      <Text textAlign="center" fontSize="sm" color={"gray.400"}>
        &copy; {new Date().getFullYear()} VendingTech. Wszelkie prawa
        zastrzeżone.
      </Text>
    </Box>
  );
};

export default Footer;
