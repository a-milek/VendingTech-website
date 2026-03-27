import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Card,
  Stack,
  Link,
} from "@chakra-ui/react";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { useIntl } from "react-intl";

const Kontakt = () => {
  const intl = useIntl();
  return (
    <Box id="kontakt" py={12} px={{ base: 4, md: 12 }} maxW="7xl" mx="auto">
      {/* Title and description */}
      <VStack spacing={4} textAlign="center" mb={12}>
        <Heading> {intl.formatMessage({ id: "contact.title" })}</Heading>
        <Text>
          {intl.formatMessage({ id: "contact.description.1" })}
          <br />
          {intl.formatMessage({ id: "contact.description.2" })}
        </Text>
      </VStack>

      {/* Contact Info */}
      <SimpleGrid spacing={4} columns={{ base: 1, md: 2 }} p={8}>
        <Card variant="outline">
          <Stack direction={{ base: "column", sm: "row" }} spacing={4} p={4}>
            <Icon as={FiPhone} boxSize={12} color="blue.500" />
            <Box>
              <Heading size="md">
                {" "}
                {intl.formatMessage({ id: "contact.phone.title" })}
              </Heading>
              <Link
                href="tel:+48530374503"
                _hover={{ textDecoration: "underline" }}
                py={2}
              >
                +48 530 374 503
              </Link>
            </Box>
          </Stack>
        </Card>
        <Card variant="outline">
          <Stack direction={{ base: "column", sm: "row" }} spacing={4} p={4}>
            <Icon as={AiOutlineMail} boxSize={12} color="blue.500" />
            <Box>
              <Heading size="md">
                {" "}
                {intl.formatMessage({ id: "contact.email.title" })}
              </Heading>
              <Link
                href="mailto:vendingtech.sklep@gmail.com"
                _hover={{ textDecoration: "underline" }}
                py={5}
              >
                vendingtech.sklep@gmail.com
              </Link>
            </Box>
          </Stack>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default Kontakt;
